interface Props {
  fullName: string;
  email: string;
  onFullName: (fullNameValue: string) => void;
  onEmail: (emailValue: string) => void;
}

const GeneralSection = ({ fullName, email, onFullName, onEmail }: Props) => {
  return (
    <div
      id="general-section"
      className="p-3 d-flex flex-column gap-3 border rounded"
    >
      <div>
        <label>Full Name</label>
        <input
          className="form-control p-1"
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => onFullName(e.target.value)}
          required
        ></input>
      </div>

      <div>
        <label>Email</label>
        <input
          className="form-control p-1"
          type="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={(e) => onEmail(e.target.value)}
          required
        ></input>
      </div>
    </div>
  );
};

export default GeneralSection;
