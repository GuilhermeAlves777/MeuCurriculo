import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contato</h2>
      <p>E-mail: aguilherme787@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/guilherme-alves-93a2681a0/" target="_blank" rel="noopener noreferrer">Meu Perfil</a></p>
    </section>
  );
};

const styles = {
  section: { padding: "3rem 1rem", backgroundColor: "#f4f4f9", textAlign: "center" },
};

export default Contact;
