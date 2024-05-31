interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  content,
}) => (
  <div>
    <h2>Prénom: {firstName}</h2>
    <h2>Nom: {lastName}</h2>
    <h3>Email: {email}</h3>
    <p>Message: {content}</p>
  </div>
);
