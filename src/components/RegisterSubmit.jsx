import { useState } from "react";
import "./RegisterSubmit.css";

const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
];

const HOBBY_OPTIONS = [
  { label: "Music", value: "music" },
  { label: "Movies", value: "movies" },
  { label: "Plastic Models", value: "plastic models" },
];

const ROLE_OPTIONS = [
  { label: "General Staff", value: "general staff" },
  { label: "Developer", value: "developer" },
  { label: "System Analyst", value: "system analyst" },
];

export default function RegisterSubmit() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // form states
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("general staff");

  function onHobbiesToggle(event) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) setHobbies((prev) => [...prev, value]);
    else setHobbies((prev) => prev.filter((item) => item !== value));
  }

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function onBackToForm() {
    setIsSubmitted(false);
  }

  // Same component, ternary rendering
  if (isSubmitted) {
    return (
      <div className="page">
        <h2 className="title">Submit Data</h2>

        <div className="result">
          <p>
            <b>Username:</b> <span className="value">{username}</span>
          </p>
          <p>
            <b>Firstname:</b> <span className="value">{firstname}</span>
          </p>
          <p>
            <b>Lastname:</b> <span className="value">{lastname}</span>
          </p>
          <p>
            <b>Gender:</b> <span className="value">{gender}</span>
          </p>
          <p>
            <b>Hoobies:</b>{" "}
            <span className="value">{hobbies.length ? hobbies.join(", ") : ""}</span>
          </p>
          <p>
            <b>Role:</b> <span className="value">{role}</span>
          </p>
        </div>

        <button className="btn" onClick={onBackToForm} type="button">
          Back to form
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <form onSubmit={onSubmit} className="form">
        <div className="group">
          <label className="label">Username</label>
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="group">
          <label className="label">Firstname</label>
          <input
            className="input"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className="group">
          <label className="label">Lastname</label>
          <input
            className="input"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="group">
          <div className="label">Gender</div>
          <div className="row">
            {GENDER_OPTIONS.map((opt) => (
              <label key={opt.value} className="option">
                <input
                  type="radio"
                  name="gender"
                  value={opt.value}
                  checked={gender === opt.value}
                  onChange={(e) => setGender(e.target.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="group">
          <div className="label">Hobbies</div>
          <div className="col">
            {HOBBY_OPTIONS.map((opt) => (
              <label key={opt.value} className="option">
                <input
                  type="checkbox"
                  value={opt.value}
                  checked={hobbies.includes(opt.value)}
                  onChange={onHobbiesToggle}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="group">
          <label className="label">Role</label>
          <select className="select" value={role} onChange={(e) => setRole(e.target.value)}>
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
