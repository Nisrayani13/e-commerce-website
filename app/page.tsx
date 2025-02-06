import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-serif">
      <div className="min-w-full">
        <Navbar></Navbar>
      </div>
      <div className="flex-1 pt-20 md:pt-20">
        <MainBody></MainBody>
      </div>
      <Footer></Footer>
    </div>
  );
}
