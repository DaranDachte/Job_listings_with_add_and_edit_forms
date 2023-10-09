import FirstBlock from "./FirstBlock/FirstBlock";
import Logo from "./Logo/Logo";
import SecondBlock from "./SecondBlock/SecondBlock";

const Item = ({ vacancy }) => {
  const params = {
    vacancyName: vacancy.vacancyName,
    companyName: vacancy.companyName,
    labels: vacancy.labels,
    publishingDate: vacancy.publishingDate,
    employmentType: vacancy.employmentType,
    location: vacancy.location,
  };
  return (
    <div>
      <Logo logo={vacancy.logo} />
      <FirstBlock params={params} />
      <SecondBlock tags={vacancy.tags} />
    </div>
  );
};

export default Item;
