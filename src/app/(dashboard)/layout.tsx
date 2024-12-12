import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex">
      <div className="w-1/6 md:w-[8%] lg:w-1/6 xl:w-[14%] p-2">
        <Link
          href="/"
          className="flex  justify-center items-center gap-2 lg:justify-start "
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className=" hidden lg:block ">SchoolAira</span>
        </Link>
        <Menu />
      </div>

      {/* navbar */}
      <div className="w-5/6 md:w-[92%] lg:w-5/6 xl:w-[86%] flex flex-col bg-[#F7F8FA] ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
