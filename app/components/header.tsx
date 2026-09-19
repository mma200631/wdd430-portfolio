import Link from "next/link";
import NavLinks from "./navLinks";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full px-16 py-4 bg-white dark:bg-black">
      <div id="header-title" className="text-2xl font-bold">
        Assumpta Chidinma Okpanachi
      </div>

      <NavLinks />
    </header>
  );
}