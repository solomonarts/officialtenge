import React, { useState } from "react";

const PrivacyPolicyDock = ({ openDock, setOpenDock }) => {
  const toggleDock = () => {
    setOpenDock(false);
  };

  return (
    <div>
      {/* Button to open Privacy Policy */}
      {/* <button onClick={toggleDock} className="privacy-policy-button">
        Privacy Policy
      </button> */}

      {/* Overlay and Dock */}
      {openDock && (
        <div className="privacy-policy-overlay">
          <div
            className="privacy-policy-dock"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dock
          >
            <button className="close-button" onClick={toggleDock}>
              &times;
            </button>
            <h2>Privacy Policy for $TENGE Memes</h2>
            <p>Effective Date: dd/mm/yyyy</p>

            <h3>Overview</h3>
            <p>
              This Privacy Policy outlines the types of personal information
              that may be collected through the www.tengetengememe.com website
              (the “Website”), how it may be used, and the efforts to protect
              it. It is important to note that because the Website operates on a
              fully decentralized platform, traditional data control and
              processing by a central entity do not apply.
            </p>

            <h3>Data Collection</h3>
            <p>
              The Website itself does not collect, store, or process personal
              data as traditional websites do. Any personal data transactions
              occur on the blockchain and are managed by the individual users
              through their blockchain addresses and interactions.
            </p>

            <h3>Use of Blockchain Technology</h3>
            <ul>
              <li>
                <strong>Public Ledger:</strong> All transactions are recorded on
                the Solana blockchain, which is public and transparent.
                Information stored on the blockchain is not controlled by any
                single entity and is accessible to anyone.
              </li>
              <li>
                <strong>Personal Responsibility:</strong> Users are responsible
                for managing their own private keys and wallet information. The
                loss or disclosure of this information can lead to irreversible
                access to the user’s blockchain assets.
              </li>
            </ul>

            <h3>Personal Information</h3>
            <ul>
              <li>
                <strong>Collection:</strong> The only personal information that
                might be indirectly collected is what users voluntarily share on
                the blockchain, such as during transactions or interactions.
              </li>
              <li>
                <strong>Usage:</strong> Any personal information disclosed in
                blockchain transactions is used strictly for those transactions
                and is governed by the blockchain technology, not by the
                Website.
              </li>
            </ul>

            <h3>Cookies and Tracking</h3>
            <p>
              The Website does not use cookies or similar tracking technologies
              as it does not process or store personal information.
            </p>

            <h3>Data Security</h3>
            <ul>
              <li>
                <strong>Decentralization:</strong> As a decentralized platform,
                there is no central point where personal data is stored or
                processed.
              </li>
              <li>
                <strong>Security Risks:</strong> The blockchain provides a high
                level of security; however, users are responsible for their own
                security measures, including safeguarding their wallet and
                private keys.
              </li>
            </ul>

            <h3>Data Rights</h3>
            <p>
              Users have control over their own information to the extent
              provided by the blockchain technology. It is important to
              understand that transactions on the blockchain are generally
              irreversible and publicly visible.
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              This Privacy Policy may be updated to reflect changes in how we
              manage the Website or changes in blockchain technology practices.
              Users are encouraged to review this policy periodically.
            </p>

            <h3>Contact Information</h3>
            <p>
              For questions or concerns about this Privacy Policy, please
              contact the community support at{" "}
              <strong>support@TENGEmeme.com</strong>.
            </p>
          </div>
          {/* Click outside the dock to close */}
          <div className="privacy-policy-background" onClick={toggleDock} />
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyDock;
