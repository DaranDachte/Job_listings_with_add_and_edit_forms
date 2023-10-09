import FirstBlockA from "./FirstBlockA/FirstBlockA";
import FirstBlockC from "./FirstBlockC/FirstBlockC";

const FirstBlock = ({ params }) => {
  return (
    <div>
      <FirstBlockA companyName={params.companyName} labels={params.labels} />
      <div>{params.vacancyName} </div>
      <FirstBlockC
        publishingDate={params.publishingDate}
        employmentType={params.employmentType}
        location={params.location}
      />
    </div>
  );
};

export default FirstBlock;
