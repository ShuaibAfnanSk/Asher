import React from 'react';
import aboutImage from '../assets/images/aboutus.svg';

const about = [
  {
    title: 'Mission',
    content: 'To inspire people to rediscover the blessings of nature and embrace a healthier lifestyle. At Asher, we are dedicated to providing pure, natural juices that empower the body to heal, protect, and thrive—because it’s never too late to choose what’s right for your health and well-being.'
  },
  {
    title: 'Vision',
    content: 'To create a world where people honor the gifts of nature in their daily lives, choosing wellness over trends and natural solutions over artificial shortcuts. Our vision is to lead this change by offering nature’s purest luxuries, helping every individual build a stronger, healthier, and more fulfilling life.'
  }
];

function About() {
  return (
    <section className='min-h-[100vh] px-8' id='about'>
      <div className="flex flex-col gap-1 pt-24">
        <h1 className='text-center text-4xl font-bold text-teal-950 mt-2'>About Asher</h1>

        <div className="flex flex-col lg:flex-row gap-3 mt-5">
          {/* left */}
          <div className="flex basis-4/6 flex-col gap-3 mt-5">
            <p data-aos='fade-up' className='text-teal-950 font-semibold text-2xl mb-2'>"Rediscover Nature, Rediscover Yourself"</p>
            <p data-aos='fade-up' className='text-gray-800 font-medium text-[18px]'>We wake up every day surrounded by artificial solutions—packaged cereals for breakfast,
              energy drinks for a quick boost, synthetic products promising beauty. Yet, in the rush to
              keep up with trends, we’ve drifted far from the blessings of nature, far from the gifts
              that God has so abundantly provided.</p>
            <p data-aos='fade-up' className='text-gray-800 font-medium text-[18px]'>Health, beauty, and happiness are not found in shortcuts. They’ve been within our reach all
              along—hidden in the vibrant fruits, wholesome nuts, and nourishing grains that nature offers.
              These are life’s true luxuries, crafted by nature’s hand and designed to nurture us</p>
            <p data-aos='fade-up' className='text-gray-800 font-medium text-[18px]'>At Asher, we believe it’s never too late to return to what’s right. It’s time to step away
              from the artificial and embrace the natural. With every sip of our fresh, pure juices, you’re
              not just rewarding yourself—you’re choosing a healthier, stronger, and happier you. You’re giving
              your body the power to heal, protect, and thrive, just as it was meant to.</p>
            <p data-aos='fade-up' className='text-teal-950 font-semibold text-2xl mt-2'>Reward yourself. Embrace the blessings of nature. Choose Asher.</p>
          </div>
          {/* right */}
          <div data-aos='fade-up' className="flex basis-1/2 justify-center">
            <img src={aboutImage} alt="About Us" className='w-[60%]' />
          </div>
        </div>

        {/* mission & vision */}
        <div className="flex flex-col md:flex-row mt-5 lg:mx-6">
          {about.map((about, idx) => (
            <div
              key={`juice-${idx}`}
              className="m-2 md:m-4 md:p-2 flex cursor-pointer">
              <div data-aos='fade-up' className="flex flex-col border-2 shadow-sm p-6 rounded-2xl">
                <h1 className='text-2xl font-bold text-teal-900 mb-2'>{about.title}</h1>
                <div className='flex items-center justify-center'>
                  <p className='text-[18px] text-gray-700 font-medium'>{about.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* why asher */}

      </div>
    </section>
  )
}

export default About;