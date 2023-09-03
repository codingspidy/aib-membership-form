import { NextResponse } from "next/server";
let dotenv = require("dotenv").config();
let nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const password = process.env.password;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "myaibbot@gmail.com",
      pass: password,
    },
    secure: true,
  });
  const res = await request.json();
  const emailContent = `
<div>
<h2>Here are the form details filled by ${res.companyName}</h2>
<h3>General Details</h3>
<div>Company Name: ${res.companyName}</div>
            <div>Address: ${res.address}</div>
            <div>City: ${res.city}</div>
            <div>Pincode: ${res.pincode}</div>
            <div>State: ${res.state}</div>
            <div>Country: ${res.country}</div>
            <div>Telephone: ${res.telephone}</div>
            <div>Fax: ${res.fax}</div>
            <div>Email: ${res.email}</div>
            <div>Website: ${res.website}</div>
            <h3>Contact Person</h3>
            <div>Name: ${
              res.contactPersonTitle +
              " " +
              res.contactPersonName +
              " " +
              res.contactPersonSurname
            }</div>
            <div>Designation: ${res.contactPersonDesignation}</div>
            <div>Mobile: ${res.contactPersonMobile}</div>
            <div>Personal phone: ${res.contactPersonPhone}</div>
            <div>Email: ${res.contactPersonEmail}</div>
            <h3>Top two additional executives:</h3>
            <h4>Executive 1</h4>
            <div>Name: ${
              res.executive1Title +
              " " +
              res.executive1Name +
              " " +
              res.executive1Surname
            }</div>
            <div>Designation: ${res.executive1Designation}</div>
            <h4>Executive 2</h4>
            <div>Name: ${
              res.executive2Title +
              " " +
              res.executive2Name +
              " " +
              res.executive2Surname
            }</div>
            <div>Designation: ${res.executive2Designation}</div>
            <h3>Additional Information:</h3>
            <div>Company Type: ${res.companyType}</div>
            <div>Year of Foundation: ${res.foundationYear}</div>
            <div>No of Employees: ${res.totalEmployees}</div>
            <div>Turnover: ${res.turnover}</div> 
            <div>Business Description: ${res.businessDesc}</div> 
            <div>Business Interests: ${res.businessInterests}</div>
            <div>Referral Name: ${res.referralName}</div>
            <div>Referral Contact: ${res.referralContact}</div>
            <div>Products & Services: ${res.services}</div>
            <div>Membership Type applying for: ${res.membershipType}</div>
</div>
`;
  const mailData = {
    from: "myaibbot@gmail.com",
    to: "info@aibusinessmen.com",
    subject: `Membership Application from ${res.companyName}`,
    text: "Hello",
    html: emailContent,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  //   res.status(200);
  return NextResponse.json({ res });
}
