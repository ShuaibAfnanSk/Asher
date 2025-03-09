import React from 'react';
import NavbarContact from '../components/Navbar/NavbarContact';

function Terms() {
    return (
        <>
            <NavbarContact />
            <div className='flex flex-col pt-28 p-8 pb-12 gap-5 text-[16px] mono-sans'>
                <h1 className='text-2xl text-teal-950 font-bold'>Terms & Conditions</h1>
                <p>Welcome to Asher – Reward Yourself. By accessing our website or scanning product QR codes, you agree to the following terms and conditions.</p>
                <div className="flex flex-col gap-3">
                    <h3 className='font-bold'>1. Purpose of the Website</h3>
                    <p>Our website and QR code functionality are solely for educational purposes. The information provided is based on credible research and expert opinions to enhance user knowledge about our products.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className='font-bold'>2. Content Usage</h3>
                    <p>All content, including product details, expert quotes, and references, is the intellectual property of Asher – Reward Yourself.</p>
                    <p>Users may not reproduce, distribute, or modify content without prior written consent.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className='font-bold'>3. Data Disclaimers</h3>
                    <p><span className='font-semibold'>Informational Use Only:</span> The health benefits mentioned are for general knowledge and do not constitute medical advice. Individual results may vary.</p>
                    <p><span className='font-semibold'>No Liability:</span> We are not responsible for any direct or indirect damages resulting from the use of information on this website. Always consult a healthcare provider for medical concerns.</p>
                    <p><span className='font-semibold'>Source Credibility:</span> References to organizations "e.g., WHO, NIH" or expert quotes are for informational purposes and do not indicate endorsement or partnership.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className='font-bold'>4. Medical Disclaimers</h3>
                    <p>1.Individual Results May Vary depending on factors such as age, health status, genetics and overall diet.</p>
                    <p>2.The information provided is for general knowledge and informational purposes only and does not constitute medical advice.</p>
                    <p>3.Consult with a healthcare professional before making any significant dietary changes or if you have any concerns about your health.</p>
                    <p>4.Not for Pregnant or Nursing Women: "While generally safe, pregnant or nursing women should consult with their healthcare provider before consuming this juice.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className='font-bold'>5. QR Code Functionality</h3>
                    <p>The QR codes on our products direct users to specific pages detailing the purchased product's ingredients, benefits, and other information.</p>
                    <p>These pages are for educational purposes only and do not collect user data.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className='font-bold'>6. Third-Party Links</h3>
                    <p>Our website may include links to third-party websites for additional information. We are not responsible for their content, accuracy, or privacy practices.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className='font-bold'>7. Amendments</h3>
                    <p>We reserve the right to modify these terms at any time. Continued use of the website implies acceptance of updated terms.</p>
                </div>
            </div>
        </>
    )
}

export default Terms;