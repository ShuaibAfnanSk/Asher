import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-full flex flex-col gap-2 relative overflow-hidden items-center justify-between bg-white p-8'>
      <div className="flex gap-5 text-[12px]">
        <Link to='/termsandconditions'>Terms & Conditions</Link>
        <Link to='/privacypolicy'>Privacy Policy</Link>
      </div>
      <img src="https://ik.imagekit.io/akiAfnan/Asher/lemon.png?tr=w-100,h-100,f-auto,q-auto,fo-auto" className='w-[100px] h-[100px] object-cover absolute left-[-40px] bottom-[-40px]' alt="" />
      <img src="https://ik.imagekit.io/akiAfnan/Asher/loader.png?tr=w-100,h-100,f-auto,q-auto,fo-auto" className='w-[100px] h-[100px] object-cover absolute right-[-40px] top-[-40px]' alt="" />
      <p className='text-sm lg:text-[15px] font-medium'>Copyright © {new Date().getFullYear()}. Asher | All Rights Reserved</p>
    </div>
  )
}

export default Footer;