import GeneralSection from "./components/GeneralSection.tsx";
import EducationSection from "./components/EducationSection.tsx";
import ExperienceSection from "./components/ExperienceSection.tsx";
import CVDisplay from "./components/CVDisplay.tsx";
import { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [degreeSd, setDegreeSd] = useState(""); // Degree start date
  const [degreeEd, setDegreeEd] = useState(""); // Degreee end date
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [positionSd, setPositionSd] = useState("");
  const [positionEd, setPositionEd] = useState("");

  const cvData = {
    fullName,
    email,
    school,
    degree,
    degreeSd,
    degreeEd,
    company,
    position,
    positionSd,
    positionEd,
  };

  // I know these don't need functions.

  const handleFullName = (fullNameValue: string) => {
    setFullName(fullNameValue);
  };

  const handleEmail = (emailValue: string) => {
    setEmail(emailValue);
  };

  const handleSchool = (schoolValue: string) => {
    setSchool(schoolValue);
  };

  const handleDegree = (degreeValue: string) => {
    setDegree(degreeValue);
  };

  const handleDegreeSd = (degreeSdValue: string) => {
    setDegreeSd(degreeSdValue);
  };

  const handleDegreeEd = (degreeEdValue: string) => {
    setDegreeEd(degreeEdValue);
  };

  const handleCompany = (companyValue: string) => {
    setCompany(companyValue);
  };

  const handlePosition = (positionValue: string) => {
    setPosition(positionValue);
  };

  const handlePositionSd = (positionSdValue: string) => {
    setPositionSd(positionSdValue);
  };

  const handlePositionEd = (positionEdValue: string) => {
    setPositionEd(positionEdValue);
  };

  return (
    <>
      <header className="w-100 d-flex justify-content-between align-items-center p-2">
        <p>Simple CV Generator</p>
        <p>Generate a simple CV</p>
      </header>

      <main className="flex-grow-1 d-flex align-items-starts gap-3 p-2">
        <div id="cv-template" className="w-50 d-flex flex-column gap-3">
          <div className="d-flex p-2 flex-column flex-sm-row justify-content-between align-items-center gap-3">
            <h3 className="mb-0">Fill out this template</h3>
          </div>
          <GeneralSection
            fullName={fullName}
            email={email}
            onFullName={handleFullName}
            onEmail={handleEmail}
          />
          <EducationSection
            school={school}
            degree={degree}
            degreeSd={degreeSd}
            degreeEd={degreeEd}
            onSchool={handleSchool}
            onDegree={handleDegree}
            onDegreeSd={handleDegreeSd}
            onDegreeEd={handleDegreeEd}
          />
          <ExperienceSection
            company={company}
            position={position}
            positionSd={positionSd}
            positionEd={positionEd}
            onCompany={handleCompany}
            onPosition={handlePosition}
            onPositionSd={handlePositionSd}
            onPositionEd={handlePositionEd}
          />
        </div>

        <CVDisplay cv={cvData} />
      </main>

      <footer className="w-100 d-flex justify-content-between align-items-center p-2">
        <p>By Taimour Shmait</p>
        <p>React Practice - September 2025</p>
      </footer>
    </>
  );
};

export default App;
