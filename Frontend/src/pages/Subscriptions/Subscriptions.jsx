import React from 'react';
import './Subscriptions.css';

function Subscriptions() {
  return (
    <div className="subscriptions-page">
      <h2 className="subscriptions-title">Subscriptions</h2>
      <p className="subscriptions-description">
        This is where your subscribed channels will appear. Start subscribing to channels to see their latest videos here.
      </p>

      <div className="subscriptions-placeholder">
        <p>No subscriptions yet.</p>
      </div>
    </div>
  );
}

export default Subscriptions;
