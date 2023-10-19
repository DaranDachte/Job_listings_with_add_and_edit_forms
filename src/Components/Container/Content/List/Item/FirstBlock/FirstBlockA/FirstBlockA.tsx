const colorMap = {
  "NEW!": "#5CA5A5",
  FEATURED: "#2B3939",
};

const FirstBlockA = ({ labels, companyName }) => {
  return (
    <div className="flex justify-around ">
      <span className=" text-[#5CA5A5]"> {companyName}</span>
      {labels.map((label) => {
        const spanClasses = `rounded h-[1.5rem] bg-[${colorMap[label]}]`;
        return <span className={spanClasses}>{label}</span>;
      })}
    </div>
  );
};

export default FirstBlockA;
