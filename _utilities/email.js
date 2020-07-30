const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `JTL Accessories <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        port: process.env.MAIGUN_PORT,
        host: process.env.MAILGUN_HOST,
        auth: {
          user: process.env.MAILGUN_USER,
          pass: process.env.MAILGUN_PASS
        }
      });
    }
    return nodemailer.createTransport({
      port: process.env.MAILTRAP_PORT,
      host: process.env.MAILTRAP_HOST,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(
      `${__dirname}/../_public/emailsTemplate/${template}.pug`,
      { firstName: this.firstName, url: this.url, subject }
    );

    //
    const mailData = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
    };

    await this.newTransport().sendMail(mailData);
  }

  async sendWelcome() {
    await this.send('Welcome', 'welcome to the JTL fam');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your Password Reset Tokeen (Valid for only 10 minutes).'
    );
  }
};
