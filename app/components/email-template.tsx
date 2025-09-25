import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  text: string;
  email: string;
  subject?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  text,
  email,
  subject = "New Message from Portfolio Contact Form",
}) => (
  <div style={containerStyle}>
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>New Message from {firstName}</h1>
        <p style={metaStyle}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div style={contentStyle}>
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Subject:</h2>
          <p style={textStyle}>{subject || "No subject provided"}</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Message:</h2>
          <p style={textStyle}>{text}</p>
        </div>

        <div style={divider}></div>

        <div style={footerStyle}>
          <p style={footerTextStyle}>
            <strong>From:</strong> {firstName} &lt;{email}&gt;
          </p>
          <p style={footerTextStyle}>
            <strong>Sent:</strong>{" "}
            {new Date().toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Inline styles for email client compatibility
const containerStyle = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  backgroundColor: "#f3f4f6",
  padding: "20px",
  color: "#1f2937",
  lineHeight: 1.6,
};

const cardStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};

const headerStyle = {
  backgroundColor: "#7c3aed",
  color: "#ffffff",
  padding: "24px",
  textAlign: "center" as const,
};

const titleStyle = {
  margin: 0,
  fontSize: "24px",
  fontWeight: 600,
};

const metaStyle = {
  margin: "8px 0 0",
  opacity: 0.9,
  fontSize: "14px",
};

const contentStyle = {
  padding: "24px",
};

const sectionStyle = {
  marginBottom: "20px",
};

const sectionTitleStyle = {
  color: "#7c3aed",
  fontSize: "16px",
  margin: "0 0 8px",
  fontWeight: 600,
};

const textStyle = {
  margin: "0",
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: 1.6,
};

const divider = {
  height: "1px",
  backgroundColor: "#e5e7eb",
  margin: "24px 0",
};

const footerStyle = {
  fontSize: "14px",
  color: "#6b7280",
};

const footerTextStyle = {
  margin: "4px 0",
  fontSize: "14px",
};

export default EmailTemplate;
