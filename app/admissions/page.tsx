import AdmissionsFAQ from "@/components/Admission/AdmissionsFAQ"
import EnrollmentCTA from "@/components/Admission/EnrollmentCTA"
import EnrollmentJourney from "@/components/Admission/EnrollmentJourney"
import FeesAndScholarships from "@/components/Admission/FeesAndScholarships"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div>
        <Navbar/>
        <EnrollmentCTA/>
        <EnrollmentJourney/>
        <FeesAndScholarships/>
        <AdmissionsFAQ/>
        <Footer/>
    </div>
  )
}

export default page