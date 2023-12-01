const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "reddytrinath39@gmail.com",
      pass: "Dxbo bqeh cyvr lyzw", //d
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "reddytrinath39@gmail.com",
    phone: req.body.phone,
    message: `From ${req.body.name}: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent:" + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
