const db = require("../../../../lib/database");
import withSession from "../../../../lib/session";

export default withSession(async (req, res) => {
  const { id } = req.query;
  const liked = req.session.get(`blog-like-${id}`);

  const handleLikeBlog = (callback, status = "add") => {
    db.query("SELECT * FROM blogs WHERE id=?", [id], (err, result) => {
      if (err) res.status(500).json(err);
      const data = result[0];
      db.query(
        "UPDATE blogs SET `likes`=? WHERE id=?",
        [status == "remove" ? data.likes - 1 : data.likes + 1, id],
        (err) => {
          if (err) res.status(500).json(err);
          callback();
        }
      );
    });
  };

  if (liked) {
    handleLikeBlog(async() => {
      req.session.unset(`blog-like-${id}`);
      await req.session.save();
      res.status(200).json({
        message: "remove like",
      });
    }, "remove");
  } else {
    handleLikeBlog(async () => {
      console.log("Hello World");
      req.session.set(`blog-like-${id}`, { id });
      await req.session.save();

      res.status(200).json({
        message: "added like",
      });
    });
  }
});
