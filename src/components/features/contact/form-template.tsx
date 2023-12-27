import React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <div>Fullname: {fullName}</div>
    <div>
      Email: <a href={`mailto:${email}`}>{email}</a>
    </div>
    <div>
      Phone: <a href={`tel:${phone}`}>{phone}</a>
    </div>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
