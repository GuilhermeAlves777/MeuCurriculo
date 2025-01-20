import React from "react";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2>Sobre Mim</h2>
      <p>
        Sou desenvolvedor com experiência Python, Power BI e SQL. 
        Trabalho em soluções inovadoras e tenho um forte interesse em otimização e inovação de processos.
      </p>
    </section>
  );
};

const styles = {
  section: { padding: "3rem 1rem", backgroundColor: "#fff", textAlign: "center" },
};

export default About;
