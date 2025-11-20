const SectionHeader = ({ title, description, images=false }) => {
  return (
    <div className="flex flex-col items-center relative gap-2">
      <h3 className="font-bold text-2xl sm:text-3xl text-center" data-aos="fade-up">
        {title}
      </h3>
      <p className="text-center" data-aos="fade-up">{description}</p>
      {images && (
        <div className="absolute w-[300px] h-[115px]" data-aos="fade-up">
          <img
            className="absolute w-[50px] h-[50px] object-cover right-6 top-10"
            src="https://ik.imagekit.io/akiAfnan/Asher/pine-apple.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
            alt=""
          />
          <img
            className="absolute w-[50px] h-[50px] object-cover -top-12 left-[150px]"
            src="https://ik.imagekit.io/akiAfnan/Asher/lemon.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
            alt=""
          />
          <img
            className="absolute w-[50px] h-[50px] object-cover bottom-0 left-6"
            src="https://ik.imagekit.io/akiAfnan/Asher/loader.png?tr=w-100,h-100,f-auto,q-auto,fo-auto"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
