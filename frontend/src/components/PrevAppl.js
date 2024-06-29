import React from 'react';

const applications = [
  {
    id: 'CRZ17164424342179845780894',
    status: 'rejected',
    pdfPath: '/path/to/rejected.pdf'
  },
  {
    id: 'CRZ17164424342179845780895',
    status: 'accepted',
    pdfPath: '/path/to/accepted.pdf'
  },
  {
    id: 'CRZ17164424342179845780896',
    status: 'pending',
    pdfPath: '/path/to/pending.pdf'
  },
  {
    id: 'CRZ17164424342179845780897',
    status: 'pending',
    pdfPath: '/path/to/pending.pdf'
  },
  {
    id: 'CRZ17164424342179845780898',
    status: 'accepted',
    pdfPath: '/path/to/accepted.pdf'
  }
];

export default function PrevAppl() {
  const renderApplications = (status, headerColor, itemColor, title) => {
    return (
      <div className="mb-7 lg:ml-[20%] lg:mr-[20%] text-white">
        <div className={`p-4 m-5 ${headerColor}`}>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
        </div>
        {applications
          .filter(application => application.status === status)
          .map(application => (
            <div key={application.id} className={`p-4 mx-5 my-2 flex lg:flex-row flex-col lg:justify-between justify-center ${itemColor}`}>
              <span>{application.id}</span>
              <a href={application.pdfPath} className="text-red-500" target="_blank" rel="noopener noreferrer">
                View
              </a>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="p-4 min-h-screen">
      {renderApplications('accepted', 'bg-green-400', 'bg-green-200', 'Accepted Applications')}
      {renderApplications('rejected', 'bg-blue-400', 'bg-blue-200', 'Rejected Applications')}
      {renderApplications('pending', 'bg-yellow-400', 'bg-yellow-200', 'Pending Applications')}
    </div>
  );
}
