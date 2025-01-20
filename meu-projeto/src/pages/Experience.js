import React from "react";

const Experience = () => {
  const experiences = [
    { title: "Desenvolvedor de Software", company: "Empresa X", period: "2022 - Presente" },
    { title: "Estagiário em TI", company: "Empresa Y", period: "2020 - 2022" },
  ];

  return (
    <section id="experience" style={styles.section}>
      <h2>Experiência</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={styles.card}>
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
          <p>{exp.period}</p>
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: { padding: "3rem 1rem", backgroundColor: "#fff", textAlign: "center" },
  card: { marginBottom: "1rem", padding: "1rem", border: "1px solid #ddd" },
};

export default Experience;
