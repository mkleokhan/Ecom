import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
const MainLayout = (props) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
