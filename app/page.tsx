import LeftNavSidebar from "@/components/layout/LeftNavSidebar";
import MainContainer from "@/components/layout/MainContainer";
import RightSidebar from "@/components/layout/RightSidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 h-screen ">
        <div className="col-span-1 sm:block sm:col-span-4 md:col-span-3 lg:col-span-3">
          <LeftNavSidebar />
        </div>
        <div className="border-x-2 col-span-11 sm:col-span-8 md:col-span-9 lg:col-span-6">
          <MainContainer />
        </div>
        <div className=" hidden lg:block lg:col-span-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
