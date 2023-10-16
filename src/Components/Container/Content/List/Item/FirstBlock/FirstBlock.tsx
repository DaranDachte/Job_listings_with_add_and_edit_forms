import FirstBlockA from "./FirstBlockA/FirstBlockA";
import FirstBlockC from "./FirstBlockC/FirstBlockC";
import FirstBlockB from "./FirstBlockB/FirstBlockB";
const FirstBlock = ({ params }) => {
  return (
    <div className="flex flex-col ml-3">
      <div>
        <FirstBlockA companyName={params.companyName} labels={params.labels} />
      </div>
      <div>
        <FirstBlockB vacancyName={params.vacancyName} vacancyId={params.id} />
      </div>
      <div>
        <FirstBlockC
          publishingDate={params.publishingDate}
          employmentType={params.employmentType}
          location={params.location}
        />
      </div>
    </div>
  );
};

export default FirstBlock;
