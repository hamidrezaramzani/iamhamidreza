const moment = require("moment");
const db = require("../../../lib/database");
const nodemailer = require("nodemailer");
export default function handler(req, res) {
  const data = req.body;
  data.date = moment().unix();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "hamidrezaramzani7@gmail.com",
    to: data.email,
    subject: "Sending Email by Hamidreza Ramzani",
    text: data.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json(error);
    } else {
      db.query(
        "INSERT INTO answers (`email` ,`message` , `date`) VALUES (?,?,?)",
        Object.values(data),
        (err) => {
          if (err) res.status(500).json(err);

          res.status(200).json({
            message: "answer sent",
          });
        }
      );
      console.log("Email sent: " + info.response);
    }
  });
}
