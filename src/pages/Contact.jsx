import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import contactImg from "../assets/images/contact-us.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import SectionHeader from "../components/SectionHeader";
import { FaAngleRight } from "react-icons/fa";

function Contact() {
  const [result, showResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    emailjs
      .sendForm(
        "service_rxwm6oa",
        "template_t17xavp",
        e.target,
        "GOkTFwdSiyN8xJ3MU"
      )
      .then(
        (result) => {
          console.log(result.text);
          showResult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.reset();
    setErrorMessage("");
  };
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] relative flex flex-col items-center justify-center">
        <video
          className="w-full h-full brightness-90 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://ik.imagekit.io/akiAfnan/Asher/drink.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-full h-full absolute flex items-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#fafafa"
              fillOpacity="1"
              d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,224C672,192,768,128,864,106.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h4
          className="text-4xl absolute text-white font-bold text-center"
          data-aos="fade-up"
        >
          Share your thoughts
        </h4>
      </div>
      <div className="flex flex-col justify-center gap-8 w-full p-8">
        <SectionHeader title={"Contact"} description={"Share your thoughts"} />
        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div
            data-aos="fade-up"
            className="flex items-center justify-center basis-1/2"
          >
            <img src={contactImg} alt="Contact Image" className="w-[70%]" />
          </div>

          {/* Form */}
          <div className="flex items-center justify-center basis-1/2">
            <form
              action=""
              onSubmit={sendEmail}
              className="contact-form flex w-full md:w-[80%] flex-col gap-2"
            >
              <input
                data-aos="fade-up"
                type="text"
                name="client_name"
                placeholder="Name"
                className="p-4 text-black bg-[#fafafa] outline-none shadow-sm rounded-md"
                required
              />
              <input
                data-aos="fade-up"
                type="email"
                name="email"
                placeholder="Email"
                className="p-4 text-black bg-[#fafafa] outline-none shadow-sm rounded-md"
                required
              />
              <textarea
                data-aos="fade-up"
                name="message"
                placeholder="Your message"
                id=""
                cols="30"
                rows="10"
                className="p-4 text-black bg-[#fafafa] outline-none shadow-sm rounded-md"
              />
              {errorMessage && (
                <div className="text-red-600 text-xl">{errorMessage}</div>
              )}
              <div className="text-green-600 text-xl">
                {result ? <Result /> : null}
              </div>
              <button
                data-aos="fade-up"
                type="submit"
                className="flex py-3 items-center justify-center px-4 bg-teal-950 text-white rounded-full"
              >
                Send Now <FaAngleRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

const Result = () => {
  return <p className="msg">Message sent Successfully!</p>;
};
