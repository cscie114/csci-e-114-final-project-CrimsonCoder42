import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENGRID_PUBLIC_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: req.body.to,
      from: 'nostro37@gmail.com',
      subject: 'TrailWeather: Your Park Weather Report',
      html: req.body.message,
    });

    res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false
    });
  }
}

export default sendEmail;
