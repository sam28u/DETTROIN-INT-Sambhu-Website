import CoreValues from "@/components/About/CoreValues"
import Milestones from "@/components/About/Milestones"
import MissionVision from "@/components/About/MissionVision"
import PrincipalMessage from "@/components/About/PrincipalMessage"
import WhyChooseUs from "@/components/About/WhyChooseUs"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"



const page = () => {
  return (
    <div>
        <Navbar/>
        <MissionVision/>
        <PrincipalMessage/>
        <Milestones/>
        <CoreValues/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default page