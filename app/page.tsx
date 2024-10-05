import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <>

     <div className="flex justify-center gap-4 p-8">
    <Card Name="ALI Raza" Age={24} RollNO={378282} Day="Monday" Timing="2 to 5"/>
      
    <Card Name="haseeb" Age={26} RollNO={441555} Day="Monday" Timing="2 to 5"/>

    <Card Name="Aqib" Age={27} RollNO={378283} Day="Monday" Timing="2 to 5"/>
      </div>
      

      </>
      
  
  );
}
