type FirstBlockAProps = {
  labels: string[];
  companyName: string;
};

type colorMapT = {
  [k: string]: string;
};

const colorMap: colorMapT = {
  "NEW!": "bg-[#5CA5A5]",
  FEATURED: "bg-[#2B3939]",
};

const FirstBlockA: React.FC<FirstBlockAProps> = ({ labels, companyName }) => {
  return (
    <div className="flex justify-around ">
      <div className="w-1/3">
        <span className=" text-[#5CA5A5]"> {companyName}</span>
      </div>
      <div className="w-2/3  ">
        {labels.map((label) => {
          const spanClasses = ` text-white rounded-[0.75rem] px-2 pb-1 pt-2  mx-2 my-3 h-[1.5rem] ${colorMap[label]}`;
          return <span className={spanClasses}> {label}</span>;
        })}
      </div>
    </div>
  );
};

export default FirstBlockA;
