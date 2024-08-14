import Navbar from "./Navbar";
const MainLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default MainLayout;
