import React, { useState } from 'react';

// Sample data for emails
const emails = {
  inbox: [
    { id: 1, sender: 'nowleyashoda41@gmail.com', subject: 'Meeting tomorrow', body: 'Hi team, let\'s meet tomorrow at 10 AM.' },
    { id: 2, sender: 'ajay@example.com', subject: 'Project update', body: 'Here\'s the latest update on our project.' },
  ],
  sent: [
    { id: 3, recipient: 'ram@example.com', subject: 'Proposal', body: 'Attached is the proposal document.' },
  ],
  draft: [
    { id: 4, subject: 'Reminder', body: 'Don\'t forget to submit the report.' },
  ],
  deleted: [
    { id: 5, sender: 'marketing@example.com', subject: 'Promotion', body: 'Special promotion for our loyal customers.' },
  ],
};

const Folder = ({ folder, emails, onSelectEmail }) => {
  return (
    <div>
      <h2>{folder}</h2>
      <ul>
        {emails.map(email => (
          <li key={email.id} onClick={() => onSelectEmail(email)}>
            <strong>{email.sender || email.recipient}</strong>: {email.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

const EmailDetails = ({ email }) => {
  return (
    <div>
      <h2>Email Details</h2>
      <p><strong>From:</strong> {email.sender}</p>
      <p><strong>To:</strong> {email.recipient}</p>
      <p><strong>Subject:</strong> {email.subject}</p>
      <p><strong>Body:</strong> {email.body}</p>
    </div>
  );
};

const App = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleSelectEmail = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div style={{border:'5px solid black', marginLeft:'30px'}}>
      <h1>Email Application</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <Folder folder="Inbox" emails={emails.inbox} onSelectEmail={handleSelectEmail} />
          <Folder folder="Sent" emails={emails.sent} onSelectEmail={handleSelectEmail} />
          <Folder folder="Draft" emails={emails.draft} onSelectEmail={handleSelectEmail} />
          <Folder folder="Deleted" emails={emails.deleted} onSelectEmail={handleSelectEmail} />
        </div>
        <div>
          {selectedEmail && <EmailDetails email={selectedEmail} />}
        </div>
      </div>
    </div>
  );
};

export default App;