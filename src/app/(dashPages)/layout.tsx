import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] h-screen md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-auto">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">Moo School</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] h-screen md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-auto flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
