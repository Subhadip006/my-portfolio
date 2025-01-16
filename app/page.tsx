import Navbar from "@/components/page/navbar";
import Name from "@/components/page/name";
import Cta from "@/components/page/cta";
import { Component } from "@/components/page/chart_display";
import { cn } from "@/lib/utils";

export default function Home(){
  return(
    <div  className={cn(
      "w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900  to-[#000000] relative",
      "before:absolute before:inset-0 before:pointer-events-none before:bg-grid")}>
      <header className="w-full flex justify-center items-center">
        <Navbar />
      </header>
      <main>
        <Name />
        <Cta />
      </main>
     </div>
  );
} 