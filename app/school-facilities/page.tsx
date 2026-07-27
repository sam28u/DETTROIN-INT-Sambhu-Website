import CampusFacilities from "@/components/facilities/CampusFacilities"
import LearningEnvironment from "@/components/facilities/LearningEnvironment"
import SmartCampusInfrastructure from "@/components/facilities/SmartCampusInfrastructure"
import VisitOurCampus from "@/components/facilities/VisitOurCampus"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div>
        <Navbar/>
        <CampusFacilities/>
        <LearningEnvironment/>
        <SmartCampusInfrastructure/>
        <VisitOurCampus/>
        <Footer/>
    </div>
  )
}

export default page