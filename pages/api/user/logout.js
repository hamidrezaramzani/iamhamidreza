import withSession from "../../../lib/session";
export default withSession(async (req, res) => {
  req.session.unset("user");
  await req.session.save();

  res.status(200).json({
    message: "user log out",
  });
});
