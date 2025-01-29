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
        <h1 className='text-center text-5xl font-bold text-teal-950 mt-2 mono-sans'>About Asher</h1>

        <div className="flex flex-col lg:flex-row gap-3 mt-5">
          {/* left */}
          <div className="flex basis-4/6 flex-col gap-3 mt-5">
            <p className='text-teal-950 font-semibold text-2xl mb-2'>"Rediscover Nature, Rediscover Yourself"</p>
            <p className='text-gray-800 font-medium text-[18px]'>We wake up every day surrounded by artificial solutions—packaged cereals for breakfast,
              energy drinks for a quick boost, synthetic products promising beauty. Yet, in the rush to
              keep up with trends, we’ve drifted far from the blessings of nature, far from the gifts
              that God has so abundantly provided.</p>
            <p className='text-gray-800 font-medium text-[18px]'>Health, beauty, and happiness are not found in shortcuts. They’ve been within our reach all
              along—hidden in the vibrant fruits, wholesome nuts, and nourishing grains that nature offers.
              These are life’s true luxuries, crafted by nature’s hand and designed to nurture us</p>
            <p className='text-gray-800 font-medium text-[18px]'>At Asher, we believe it’s never too late to return to what’s right. It’s time to step away
              from the artificial and embrace the natural. With every sip of our fresh, pure juices, you’re
              not just rewarding yourself—you’re choosing a healthier, stronger, and happier you. You’re giving
              your body the power to heal, protect, and thrive, just as it was meant to.</p>
            <p className='text-teal-950 font-semibold text-2xl mt-2'>Reward yourself. Embrace the blessings of nature. Choose Asher.</p>
          </div>
          {/* right */}
          <div className="flex basis-1/2 justify-center">
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
        <div className="flex flex-col mt-4 gap-2">
          <h1 data-aos='fade-up' className='text-xl font-bold text-teal-950'>Why Choose Asher?</h1>
          <p data-aos='fade-up' className='text-[18px] font-bold text-teal-950'>India's First 100% Organic and Health-Conscious Juice Brand</p>
          <p data-aos='fade-up'>At <span className='font-bold text-teal-950'>Asher - Reward Yourself</span>, we’re proud to be India’s first brand that focuses on creating 100%
            organic, preservative-free, and health-conscious juices. Our goal is to not only deliver the
            best-tasting beverages but also to educate and empower our customers about making healthier
            lifestyle choices.</p>
        </div>

        {/* What Makes Us Different? */}
        <div className="flex flex-col mt-4">
          <h1 data-aos='fade-up' className='text-xl font-bold text-teal-950'>What Makes Us Different?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:m-4">
            {/* 1 */}
            <div data-aos='fade-up' className="flex flex-col gap-1 border-2 p-4 rounded-xl">
              <p className='font-bold'>1. Pure, Cold-Pressed Goodness</p>
              <p>Unlike traditional juice points, where heat and oxidation reduce nutrient quality,
                we use a <span className='font-bold text-teal-950'>state-of-the-art Kuvings B1700 cold
                  press juicer</span>. This method ensures every bottle of juice retains its
                <span className='font-bold text-teal-950'> natural enzymes, vitamins, and minerals</span>,
                delivering maximum nutrition with every sip.</p>
            </div>

            {/* 2 */}
            <div data-aos='fade-up' className="flex flex-col gap-1 border-2 p-4 rounded-xl">
              <p className='font-bold'>2. Tailored for Every Lifestyle</p>
              <p>Whether you’re a <span className='font-bold text-teal-950'>gym enthusiast</span>, a busy professional, or someone looking for a healthier alternative to sugary beverages, Asher is here for you. We’ve categorized our juices into:</p>
              <ul className='list-disc list-inside'>
                <li><span className='font-bold text-teal-950'>Pre-workout, post-workout, and everyday wellness options</span> — so you can choose what fits your routine best.</li>
              </ul>
            </div>

            {/* 3 */}
            <div data-aos='fade-up' className="flex flex-col gap-1 border-2 p-4 rounded-xl">
              <p className='font-bold'>3. 100% Organic and Natural</p>
              <p>We take pride in offering juices that are:</p>
              <ul className='list-disc list-inside'>
                <li><span className='font-bold text-teal-950'>100% organic</span>, made with fresh, handpicked ingredients.</li>
                <li><span className='font-bold text-teal-950'>Free from artificial sugar</span>, a known <span className='font-bold text-teal-950'>silent poison</span> that invites health issues like diabetes, obesity, and heart disease.</li>
                <li>Completely <span className='font-bold text-teal-950'>preservative-free, with no added flavors or colors</span>, giving you beverages that are as pure as nature intended.</li>
              </ul>
              <p className='font-bold text-teal-950'>Every sip of Asher juice is crafted for your health, naturally.</p>
            </div>

            {/* 4 */}
            <div data-aos='fade-up' className="flex flex-col gap-1 border-2 p-4 rounded-xl">
              <p className='font-bold'>4. Unmatched Hygiene Standards</p>
              <p>We understand that health begins with hygiene. At Asher, we go the extra mile to ensure every product you consume is crafted with the highest safety standards:</p>
              <ul className='list-disc list-inside'>
                <li><span className='font-bold text-teal-950'>Bottle Sterilization:</span> We use <span className='font-bold text-teal-950'>hydrogen peroxide</span> to clean and sterilize our glass bottles, effectively killing germs and bacteria without leaving any harmful residues.</li>
                <li><span className='font-bold text-teal-950'>Customer Care:</span> Every step of our production and packaging process is designed to ensure cleanliness—from our sterilized equipment to ensuring every bottle reaches your hands in pristine condition.</li>
              </ul>
              <p className='font-bold text-teal-950'>Your health and safety are our top priorities.</p>
            </div>

            {/* 5 */}
            <div data-aos='fade-up' className="flex flex-col gap-1 border-2 p-4 rounded-xl">
              <p className='font-bold'>5. Transparency You Can Trust</p>
              <p>We believe in <span className='font-bold text-teal-950'>complete transparency</span>. Every bottle of Asher juice features a <span className='font-bold text-teal-950'>QR code</span> that allows you to access detailed information about:</p>
              <ul className='list-disc list-inside'>
                <li>Each ingredient used.</li>
                <li>The specific health benefits of the juice for your body, <span className='font-bold text-teal-950'>from head to toe</span>.</li>
              </ul>
              <p className='font-bold text-teal-950'>This ensures you can make <span className='font-bold text-teal-950'>informed choices</span> about your health, every time.</p>
            </div>

            {/* 6 */}
            <div data-aos='fade-up' className="flex flex-col gap-1 border-2 p-4 rounded-xl">
              <p className='font-bold'>6. Sustainable, Eco-Friendly Packaging</p>
              <p>We care about the planet as much as we care about your health. That’s why we use <span className='font-bold text-teal-950'>reusable glass bottles</span>,
                contributing to a <span className='font-bold text-teal-950'>greener, more sustainable future</span>.</p>
            </div>

            {/* 7 */}
            <div data-aos='fade-up' className="flex flex-col gap-1 border-2 p-4 rounded-xl">
              <p className='font-bold'>7. Educating About Sugar – The Hidden Poison</p>
              <p>At Asher, we’re on a mission to raise awareness about the dangers of artificial sugar, which is a leading cause of:</p>
              <ul className='list-disc list-inside'>
                <li>Obesity and unhealthy weight gain.</li>
                <li>Heart problems and high cholesterol.</li>
                <li>Diabetes and insulin resistance.</li>
              </ul>
              <p>We’ve taken a <span className='font-bold text-teal-950'>zero-tolerance stance</span> on artificial sugar. Instead:</p>
              <ul className='list-disc list-inside'>
                <li><span className='font-bold text-teal-950'>We rely solely on the natural sweetness of fruits</span> and other wholesome ingredients.</li>
                <li><span className='font-bold text-teal-950'>We enrich our juices with natural fiber</span>, which helps regulate blood sugar levels, improves digestion, and combats health issues commonly caused by sugar consumption.</li>
              </ul>
              <p>By choosing Asher, you’re making a conscious decision to protect your body from the harmful effects of sugar and invest in long-term wellness.</p>
            </div>

          </div>
        </div>

        {/* Our Primary Focus */}
        <div className="flex flex-col gap-2">
          <h1 data-aos='fade-up' className='text-xl font-bold text-teal-950'>Our Primary Focus</h1>
          <ul className='list-disc list-inside'>
            <li data-aos='fade-up'>
              <div className="flex flex-col gap-2">
                <p><span className='font-bold text-teal-950'>Empowering a Healthy Lifestyle</span>: At <span className='font-bold text-teal-950'>Asher - Reward Yourself</span>, we believe that <span className='font-bold text-teal-950'>true luxury</span> lies in leading a life that is healthy, vibrant, and fulfilling. Health is the ultimate wealth, and by choosing Asher, you’re indulging in a <span className='font-bold text-teal-950'>luxury crafted by nature</span>— a commitment to nourishing your body with the finest organic and natural ingredients.</p>
                <p>With every sip, you’re embracing a lifestyle that promotes <span className='font-bold text-teal-950'>energy, vitality, and long-term wellness</span>, proving that health and indulgence can go hand in hand.</p>
              </div>
            </li>
            <li data-aos='fade-up'>
              <div className="flex flex-col gap-2">
                <p><span className='font-bold text-teal-950'>Raising Awareness:</span> At Asher, we’re dedicated to educating our customers about the <span className='font-bold text-teal-950'>transformative power of nutrition</span>. We believe:</p>
                <p className='font-bold text-teal-950'>Every problem your body faces can be solved with the right nutrition.</p>
                <p>Proper nutrition is the key to not just healing your body but also <span className='font-bold text-teal-950'>preventing future health issues</span>.</p>
                <p>When you choose Asher, you’re not just investing in organic juices—you’re investing in a future free from illness, a life full of energy, and the peace of mind that comes from knowing you’ve made the best choice for your body.</p>
                <p>With <span className='font-bold text-teal-950'>Asher - Reward Yourself</span>, we invite you to take control of your health, naturally and effortlessly. <span className='font-bold text-teal-950'>It’s not just a juice, it’s your journey to a peaceful, disease-free life</span>.</p>
              </div>
            </li>
            <li data-aos='fade-up'>
              <p><span className='font-bold text-teal-950'>Building a Community:</span> Asher is more than a juice brand—it’s a movement for health, transparency, and sustainability.</p>
            </li>
          </ul>
        </div>

        {/* What You’re Investing In */}
        <div className="flex flex-col mt-4 gap-2">
          <h1 data-aos='fade-up' className='font-bold text-xl text-teal-950'>What You’re Investing In</h1>
          <p data-aos='fade-up'>When you choose Asher, you’re not just buying a juice. You’re investing in:</p>
          <ul className='list-disc list-inside ml-4'>
            <li data-aos='fade-up' className='font-bold'>Nature over artificial quick fixes.</li>
            <li data-aos='fade-up' className='font-bold'>Wellness over compromises.</li>
            <li data-aos='fade-up' className='font-bold'>Quality over convenience.</li>
          </ul>
        </div>

        {/* Join the Asher Movement */}
        <div className="flex flex-col gap-2 mt-4 mb-4">
          <h1 data-aos='fade-up' className='font-bold text-xl text-teal-950'>Join the Asher Movement</h1>
          <p data-aos='fade-up'>Choose <span className='font-bold text-teal-950'>Asher - Reward Yourself</span> and experience the difference of:</p>
          <ul className='list-disc list-inside ml-4'>
            <li data-aos='fade-up' className='font-bold text-teal-950'>100% organic, preservative-free, and health-conscious beverages.</li>
            <li data-aos='fade-up'>Products crafted with <span className='font-bold text-teal-950'>love, care, and nature’s finest ingredients</span>.</li>
            <li data-aos='fade-up'>A commitment to <span className='font-bold text-teal-950'>educating and empowering you for better health choices</span>.</li>
          </ul>
          <p data-aos='fade-up'>So go ahead — <span className='font-bold text-teal-950'>reward yourself</span> with the purity of nature and the promise of health. At Asher, <span className='font-bold text-teal-950'>we don’t compromise on your well-being</span>.</p>
        </div>

      </div>
    </section>
  )
}

export default About;