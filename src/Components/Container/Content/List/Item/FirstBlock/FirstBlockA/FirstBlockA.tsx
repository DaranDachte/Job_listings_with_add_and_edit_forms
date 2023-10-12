const FirstBlockA = ({ labels, companyName }) => {
  return (
    <div className="flex justify-around ">
      <span className=" text-[#5CA5A5]"> {companyName}</span>{" "}
      {labels.map((label) => (
        <span>{label}</span>
      ))}
    </div>
  );
};

export default FirstBlockA;
