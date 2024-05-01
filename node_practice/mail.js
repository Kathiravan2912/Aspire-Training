var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kathiravan2002anbarasan@gmail.com',
    pass: 'Kathir@29122002'
  }
});

var mailOptions = {
  from: 'kathiravan2002anbarasan@gmail.com',
  to: 'kathiravan2002anbarasan@gmail.com.com',
  subject: 'Sample Email using Node.js',
  text: 'HI! This is Kathiravan From IFET College of Engineering.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent Successfully: ' + info.response);
  }
});


// need to be work,, error in accepting username and password