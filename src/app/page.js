import Image from "next/image";
import NavBar from "./components/NavBar";
import About from "./about/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="px-5 md:px-10 lg:px-20 my-10 md:my-16">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}
