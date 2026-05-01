import React from 'react';

function Fees() {
  const fees = [
    { id: 1, description: 'Tuition Fee', amount: '₹5000', status: 'paid', date: '2026-01-15' },
    { id: 2, description: 'Lab Fee', amount: '₹500', status: 'paid', date: '2026-01-15' },
    { id: 3, description: 'Activity Fee', amount: '₹200', status: 'pending', date: '2026-05-15' },
    { id: 4, description: 'Library Fee', amount: '₹100', status: 'pending', date: '2026-06-15' },
  ];

  const totalPaid = fees.filter(f => f.status === 'paid').reduce((acc, f) => acc + parseInt(f.amount.replace('₹', '')), 0);
  const totalPending = fees.filter(f => f.status === 'pending').reduce((acc, f) => acc + parseInt(f.amount.replace('₹', '')), 0);

  return (
    <div className="page">
      <h1>Fees</h1>
      
      <div className="fees-summary">
        <div className="summary-card paid">
          <p className="summary-label">Total Paid</p>
          <p className="summary-amount">₹{totalPaid}</p>
        </div>
        <div className="summary-card pending">
          <p className="summary-label">Total Pending</p>
          <p className="summary-amount">₹{totalPending}</p>
        </div>
      </div>

      <div className="fees-list">
        {fees.map((fee) => (
          <div key={fee.id} className={`fee-item status-${fee.status}`}>
            <div className="fee-info">
              <h3>{fee.description}</h3>
              <p className="fee-date">Due: {fee.date}</p>
            </div>
            <div className="fee-amount-section">
              <p className="fee-amount">{fee.amount}</p>
              <span className={`fee-status status-${fee.status}`}>
                {fee.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fees;
