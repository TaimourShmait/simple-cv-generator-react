interface Props {
  school: string;
  degree: string;
  degreeSd: string;
  degreeEd: string;
  onSchool: (schoolValue: string) => void;
  onDegree: (degreeValue: string) => void;
  onDegreeSd: (degreeSdValue: string) => void;
  onDegreeEd: (degreeEdValue: string) => void;
}

const EducationSection = ({
  school,
  degree,
  degreeSd,
  degreeEd,
  onSchool,
  onDegree,
  onDegreeSd,
  onDegreeEd,
}: Props) => {
  return (
    <div
      id="education-section"
      className="p-3 d-flex flex-column gap-3 border rounded"
    >
      <div>
        <label>School / College / University Name</label>
        <input
          className="form-control p-1"
          type="text"
          value={school}
          onChange={(e) => onSchool(e.target.value)}
          required
        />
      </div>

      <div className="d-flex gap-2 align-items-center degree-container">
        <div className="flex-grow-1">
          <label>Degree</label>
          <input
            className="form-control p-1"
            type="text"
            placeholder="BS in Computer Science"
            value={degree}
            onChange={(e) => onDegree(e.target.value)}
            required
          />
        </div>

        <div className="d-flex gap-2 dates-container">
          <div className="d-flex flex-column">
            <label>Start Date</label>
            <input
              type="date"
              className="p-1 form-control"
              value={degreeSd}
              onChange={(e) => onDegreeSd(e.target.value)}
              required
            />
          </div>

          <div className="d-flex flex-column">
            <label>End Date</label>
            <input
              type="date"
              className="p-1 form-control"
              value={degreeEd}
              onChange={(e) => onDegreeEd(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
