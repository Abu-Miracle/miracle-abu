import Image from "next/image";
import NavBar from "./components/NavBar";
import About from "./about/page";

export default function Home() {
  return (
    <div className="px-10 lg:px-20 my-16">
      <NavBar />
      <About />
    </div>
  );
}
