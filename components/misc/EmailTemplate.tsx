interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  content: string;
}

export function generateEmailTemplate({ firstName, lastName, email, content }: EmailTemplateProps): string {
  return (`<!DOCTYPE html> 
  <html> 
    <head> 
      <style> 
        body { 
          font-family: Arial, sans-serif; 
          font-size: 16px; 
          line-height: 1.5; 
          color: #333; 
          margin: 0; 
          padding: 0; 
        } 
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          padding: 20px; 
        } 
        h1 { 
          font-size: 24px; 
          margin-bottom: 20px; 
        } 
        p { 
          margin-bottom: 20px; 
        } 
        .content { 
          background-color: #f9f9f9; 
          padding: 20px; 
          border-radius: 5px; 
        } 
      </style> 
    </head> 
    <body> 
      <div class="container"> 
        <h1>Nouveau Message du Website</h1> 
        <div class="content"> 
          <p><strong>Nom:</strong> ${firstName} ${lastName}</p> 
          <p><strong>Email:</strong> ${email}</p> 
          <p><strong>Message:</strong> ${content}</p> 
        </div> 
      </div> 
    </body>
  `);
}

