const Tags = ({ tags }) => {
  return (
    <div className=" h-[2rem]">
      {tags.map((tag) => (
        <span className=" hover:text-[#FFF] rounded bg-[#eef7f6] text-[#5CA5A5] p-1 mx-1 hover:bg-[#5CA5A5]  tracking-[-0.00769rem]  hover:cursor-pointer ">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
