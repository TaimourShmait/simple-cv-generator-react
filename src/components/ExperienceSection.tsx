interface Props {
  company: string;
  position: string;
  positionSd: string;
  positionEd: string;
  onCompany: (companyValue: string) => void;
  onPosition: (positionValue: string) => void;
  onPositionSd: (positionSdValue: string) => void;
  onPositionEd: (positionEdValue: string) => void;
}

const ExperienceSection = ({
  company,
  position,
  positionSd,
  positionEd,
  onCompany,
  onPosition,
  onPositionSd,
  onPositionEd,
}: Props) => {
  return (
    <div
      id="experience-section"
      className="p-3 d-flex flex-column gap-3 border rounded"
    >
      <div>
        <label>Company Name</label>
        <input
          className="form-control p-1"
          type="text"
          value={company}
          onChange={(e) => onCompany(e.target.value)}
          required
        />
      </div>

      <div className="d-flex gap-2 align-items-center position-container">
        <div className="flex-grow-1">
          <label>Position</label>
          <input
            className="form-control p-1"
            type="text"
            value={position}
            onChange={(e) => onPosition(e.target.value)}
            required
          />
        </div>

        <div className="d-flex gap-2 dates-container">
          <div className="d-flex flex-column">
            <label>Start Date</label>
            <input
              type="date"
              className="p-1 form-control"
              value={positionSd}
              onChange={(e) => onPositionSd(e.target.value)}
              required
            />
          </div>

          <div className="d-flex flex-column">
            <label>End Date</label>
            <input
              type="date"
              className="p-1 form-control"
              value={positionEd}
              onChange={(e) => onPositionEd(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
