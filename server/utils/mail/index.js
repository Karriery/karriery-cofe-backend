const fs = require("fs");
const Handlebars = require("handlebars");
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "mail.karriery.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@karriery.com",
    pass: "20028952karriery",
  },
});

module.exports = {
  async reservationMail({ to, link , id , packName }) {
    const file = fs.readFileSync( __dirname + "/templates/reservation.hbs").toString();
    const template =  Handlebars.compile(file);
    await transporter.sendMail({
      from: "info@karriery.com",
      to,
      subject: "Check out your reservation",
      text: "Check out your reservation at " + link,
      html:  template({ link , id , packName }),
    });
  },
};
