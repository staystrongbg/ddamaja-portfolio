import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  text: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  text,
  email,
}) => (
  <div>
    <p>{email}</p>
    <p>{text}</p>
  </div>
);

export default EmailTemplate;
