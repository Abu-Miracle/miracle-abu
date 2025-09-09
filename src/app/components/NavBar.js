import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full flex justify-center mb-3">
      <div className="bg-[var(--dark-gray)] border-2 border-[var(--light-gray)] rounded-full flex justify-center items-center w-16 h-16">
        <Image src="/logo.svg" width={40} height={40} alt="Logo" />
      </div>
      <div className="bg-[#1B1B1B] border-[var(--light-gray)] flex justify-between items-center border-2 w-full rounded-full px-14">
        <h1 className="hover:text-[var(--orange)] cursor-pointer">ABOUT</h1>
        <h1 className="hover:text-[var(--orange)] cursor-pointer">PORTFOLIO</h1>
        <h1 className="hover:text-[var(--orange)] cursor-pointer">CONTACT</h1>
      </div>
    </div>
  );
}
