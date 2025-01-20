import React from "react";

const Skills = () => {
  const skills = ["Python", "Power BI", "Node.js", "MySQL", "VB"];
  return (
    <section id="skills" style={styles.section}>
      <h2>Habilidades</h2>
      <ul style={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.item}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: { padding: "3rem 1rem", backgroundColor: "#f4f4f9", textAlign: "center" },
  list: { listStyle: "none", padding: 0 },
  item: { padding: "0.5rem", fontSize: "1.2rem" },
};

export default Skills;
