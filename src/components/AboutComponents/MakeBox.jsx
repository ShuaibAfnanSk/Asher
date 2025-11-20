const MakeBox = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      className="p-8 flex relative rounded-md bg-white flex-col gap-12 subtle-shadow"
    >
      <img
        className="w-[50px] h-[50px] absolute bg-white -right-6 top-4 rounded-full p-3 bordered-shadow"
        src={data.img ?? ""}
        alt=""
      />
      <div className="flex items-center gap-[5px] w-fit">
        {[...Array(3)].map((_, id) => (
          <span
            key={id}
            className="w-[5px] h-[5px] bg-black rounded-full"
          ></span>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold">{data.title ?? ""}</h4>
        <p>{data.description ?? ""}</p>
        {data.bullets.length !== 0 && (
          <ul className="pl-8 list-disc flex flex-col gap-2">
            {data.bullets.length !== 0 &&
              data.bullets.map((bullet, id) => (
                <li className="" key={id}>
                  {bullet}
                </li>
              ))}
          </ul>
        )}
        {data.line && data.line.trim() !== "" && <p>{data.line}</p>}
      </div>
    </div>
  );
};

export default MakeBox;
