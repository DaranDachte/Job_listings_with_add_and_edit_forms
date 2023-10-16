import FirstBlock from "./FirstBlock/FirstBlock";
import Logo from "./Logo/Logo";
import Tags from "./Tags/Tags";
const Item = ({ vacancy }) => {
  const params = {
    vacancyName: vacancy.vacancyName,
    companyName: vacancy.companyName,
    labels: vacancy.labels,
    publishingDate: vacancy.publishingDate,
    employmentType: vacancy.employmentType,
    location: vacancy.location,
    tags: vacancy.tags,
    id: vacancy.id,
  };

  return (
    <div className="flex  justify-between rounded mb-[1.5rem] py-[2rem] px-[3rem]  bg-[#fff] ">
      <div className=" flex w-1/2">
        <Logo logo={vacancy.logo} />
        <FirstBlock params={params} />
      </div>
      <div className="flex items-center  justify-end w-1/2">
        <Tags tags={vacancy.tags} />
      </div>
    </div>
  );
};

export default Item;
