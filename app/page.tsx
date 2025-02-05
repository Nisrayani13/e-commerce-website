import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="min-w-full">
        <Navbar></Navbar>
      </div>
      <div className="flex-1 pt-30 md:pt-16">Hiiiiiiiiiiiii</div>
      <Footer></Footer>
    </div>
  );
}
