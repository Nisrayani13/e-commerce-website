import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-serif">
      <div className="min-w-full">
        <Navbar></Navbar>
      </div>
      {/* <div className="flex-1 pt-30 md:pt-16">Main body</div>
      <Footer></Footer> */}
    </div>
  );
}
