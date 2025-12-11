import React, { useState } from "react";

const JobApplicationForm: React.FC = () => {
  const [candidateName, setCandidateName] = useState("");
  const [email, setEmail] = useState("");
  const [years, setYears] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const skillList = ["JavaScript", "React", "TypeScript", "Node.js", "Python", "CSS", "HTML"];

  const handleSkillChange = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const handleSubmit = () => {

    if (!candidateName) return alert("Candidate Name is required");
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return alert("Enter a valid email");
    if (!years || Number(years) < 1)
      return alert("Years of experience must be at least 1");
    if (skills.length === 0)
      return alert("Select at least one skill");

    console.log({
      candidateName,
      email,
      years: Number(years),
      skills,
    });

    alert("Form submitted! Check console.");

    // Reset form
    setCandidateName("");
    setEmail("");
    setYears("");
    setSkills([]);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", background: "white",
      borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Job Application Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Candidate Name */}
        <label>Candidate Name *</label>
        <input
          type="text"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        {/* Email */}
        <label>Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        {/* Years */}
        <label>Years of Experience *</label>
        <input
          type="number"
          min="1"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        {/* Skills */}
        <label>Skills *</label>
        <div style={{ marginBottom: "15px" }}>
          {skillList.map((skill) => (
            <div key={skill}>
              <input
                type="checkbox"
                checked={skills.includes(skill)}
                onChange={() => handleSkillChange(skill)}
              />
              <span style={{ marginLeft: "6px" }}>{skill}</span>
            </div>
          ))}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#4F46E5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
