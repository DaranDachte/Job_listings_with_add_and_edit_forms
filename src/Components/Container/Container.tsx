import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Container = () => {
  return (
    <div className=" bg-[#eef7f6]">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Container;
