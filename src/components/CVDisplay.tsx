interface Props {
  cv: {
    fullName: string;
    email: string;
    school: string;
    degree: string;
    degreeSd: string;
    degreeEd: string;
    company: string;
    position: string;
    positionSd: string;
    positionEd: string;
  };
}

const CVDisplay = ({ cv }: Props) => {
  return (
    <div className="w-50 d-flex flex-column gap-3" id="cv-display">
      <div className="d-flex p-2 flex-column flex-sm-row justify-content-between align-items-center gap-3">
        <h3 className="mb-0">Your CV</h3>
      </div>

      <div className="p-2 border rounded bg-white">
        <div className="border-bottom p-2">
          <h1 className="h3 h-sm-1">{cv.fullName}</h1>
          <p className="mb-0">{cv.email}</p>
        </div>

        <div className="p-2">
          <h4 className="h5 h-sm-4">Education</h4>
          <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
            <div className="flex-grow-1">
              <h5 className="h6 h-sm-5">{cv.degree}</h5>
              <p className="mb-0 text-break">{cv.school}</p>
            </div>
            <div className="text-md-end">
              <p className="mb-0 small">
                {cv.degreeSd} - {cv.degreeEd}
              </p>
            </div>
          </div>
        </div>

        <div className="p-2">
          <h4 className="h5 h-sm-4">Experience</h4>
          <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
            <div className="flex-grow-1">
              <h5 className="h6 h-sm-5">{cv.position}</h5>
              <p className="mb-0 text-break">{cv.company}</p>
            </div>
            <div className="text-md-end">
              <p className="mb-0 small">
                {cv.positionSd} - {cv.positionEd}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDisplay;
