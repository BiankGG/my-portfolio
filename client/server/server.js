require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 8000;
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/api/send", (req, res) => {
  const { email, subject, message } = req.body;
 

  const mailOptions = {
    from: "biancaggriffin@gmail.com",
    to: "biancagriffin@hotmail.es",
    subject: subject,
    text: `Mensaje de: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: "message delivered correctly" });
  });
});

app.listen(port, () => {
  console.log(`server is on  http://localhost:${port}`);
});
