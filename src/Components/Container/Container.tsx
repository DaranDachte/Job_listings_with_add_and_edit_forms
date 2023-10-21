import Content from "./Content/Content";
import Header from "./Header/Header";

const Container = () => {
  return (
    <div className=" bg-[#eef7f6] h-full pb-[1rem]">
      <Header />
      <Content />
    </div>
  );
};

export default Container;
