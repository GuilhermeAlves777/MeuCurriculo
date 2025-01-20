import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Guilherme Alves. Todos os direitos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: { padding: "1rem", backgroundColor: "#333", color: "#fff", textAlign: "center" },
};

export default Footer;
