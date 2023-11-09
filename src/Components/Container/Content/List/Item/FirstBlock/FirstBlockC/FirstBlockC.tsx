type FirstBlockCProps = {
  publishingDate: string;
  employmentType: string;
  location: string;
};

const FirstBlockC: React.FC<FirstBlockCProps> = ({
  publishingDate,
  employmentType,
  location,
}) => {
  return (
    <div className="flex justify-around ">
      <span> {publishingDate}</span>
      <span>:</span>
      <span>{employmentType}</span>
      <span></span>
      <span>{location}</span>
    </div>
  );
};

export default FirstBlockC;
