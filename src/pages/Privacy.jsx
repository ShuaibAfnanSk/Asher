import React from 'react'
import NavbarContact from '../components/Navbar/NavbarContact'

function Privacy() {
  return (
    <>
      <NavbarContact />
      <div className='flex flex-col pt-28 p-8 gap-5 text-[16px] mono-sans'>
        <h1 className='text-2xl text-teal-950 font-bold'>Privacy Policy</h1>
        <p>At Asher – Reward Yourself, we prioritize your privacy. This Privacy Policy outlines how we handle information collected through your interaction with our website and QR code features.</p>
        <div className="flex flex-col gap-3">
          <h3 className='font-bold'>1. Information Collection and Use</h3>
          <p>No Personal Data Collection: We do not collect or request personal information (e.g., names, email addresses, or payment details).</p>
          <p><span className='font-semibold'>QR Code Functionality:</span> Scanning the QR code directs users to an informational webpage specific to the purchased product, detailing its benefits and educational content.</p>
          <p><span className='font-semibold'>Cookies and Analytics:</span> We may use cookies or similar technologies to enhance your browsing experience and improve website functionality.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className='font-bold'>2. Purpose of the Website</h3>
          <p>Our website is designed to educate customers about the benefits of our products. It is not intended for collecting or processing personal data.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className='font-bold'>3. Third-Party References and Links</h3>
          <p>Our website may reference credible organizations like the World Health Organization (WHO), National Institutes of Health (NIH), and others for educational purposes.</p>
          <p>These references do not imply endorsement or affiliation. We do not control or guarantee the accuracy of third-party content.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className='font-bold'>4. Data Security</h3>
          <p>Although we do not collect personal data, we implement security measures to protect website integrity and ensure user trust.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className='font-bold'>5. User Rights</h3>
          <p>Since no personal data is collected, users are not required to provide any information. For inquiries, contact us at +91 7730811027.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className='font-bold'>6. Policy Updates</h3>
          <p>We may update this policy to reflect changes in our practices. Please check periodically for updates.</p>
        </div>
      </div>
    </>
  )
}

export default Privacy