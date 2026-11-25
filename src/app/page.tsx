import { Mainform } from "@/src/components/register/Mainform";
import TechText from "@/src/components/animated/TechText";

const headline = "Every great story\nbegins with a name.\nLet this be the start\nof yours.";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-screen ">
      <div className="flex-1 h-48 w-full sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-112">
        
      </div>
      <div className="flex-1">
        <Mainform/>
      </div>
    </div>
  )
}

export default HomePage