import AcademicExcellence from "@/components/Academics/AcademicExcellence"
import CallToAction from "@/components/Academics/CallToAction"
import FutureProofPedagogy from "@/components/Academics/FutureProofPedagogy"
import LearningJourney from "@/components/Academics/LearningJourney"
import StreamAdvantage from "@/components/Academics/StreamAdvantage"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const page = () => {
  return (
    <div>
        <Navbar/>
        <AcademicExcellence/>
        <LearningJourney/>
        <StreamAdvantage/>
        <FutureProofPedagogy/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default page