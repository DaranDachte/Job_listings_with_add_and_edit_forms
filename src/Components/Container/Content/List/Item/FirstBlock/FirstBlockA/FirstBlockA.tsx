const FirstBlockA = ({ labels, companyName }) => {
  return (
    <div className="flex justify-around ">
      <span> {companyName}</span>{" "}
      {labels.map((label) => (
        <span>{label}</span>
      ))}
    </div>
  );
};

export default FirstBlockA;
