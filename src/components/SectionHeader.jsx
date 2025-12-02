const SectionHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center relative gap-2">
      <h3
        className="font-bold z-10 text-2xl sm:text-3xl text-center"
        data-aos="fade-up"
      >
        {title}
      </h3>
      <p className="text-center z-10" data-aos="fade-up">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
