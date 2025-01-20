import React, { useState } from 'react';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="navbar" style={styles.section}>
      <ul style={{
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',  // Centraliza os itens horizontalmente
        backgroundColor: '#333', // Fundo preto para o navbar
        width: '100%',            // Garante que o navbar ocupe toda a largura disponível
      }}>
        <li style={{ marginRight: '20px' }}>
          <a
            href="#home"
            style={{
              textDecoration: 'none',
              color: hovered === 'home' ? 'lightgray' : 'white', // Cor do texto branca
            }}
            onMouseEnter={() => setHovered('home')}
            onMouseLeave={() => setHovered(null)}
          >
            Home
          </a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a
            href="#about"
            style={{
              textDecoration: 'none',
              color: hovered === 'about' ? 'lightgray' : 'white', // Cor do texto branca
            }}
            onMouseEnter={() => setHovered('about')}
            onMouseLeave={() => setHovered(null)}
          >
            Sobre
          </a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a
            href="#skills"
            style={{
              textDecoration: 'none',
              color: hovered === 'skills' ? 'lightgray' : 'white', // Cor do texto branca
            }}
            onMouseEnter={() => setHovered('skills')}
            onMouseLeave={() => setHovered(null)}
          >
            Habilidades
          </a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a
            href="#experience"
            style={{
              textDecoration: 'none',
              color: hovered === 'experience' ? 'lightgray' : 'white', // Cor do texto branca
            }}
            onMouseEnter={() => setHovered('experience')}
            onMouseLeave={() => setHovered(null)}
          >
            Experiência
          </a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              color: hovered === 'contact' ? 'lightgray' : 'white', // Cor do texto branca
            }}
            onMouseEnter={() => setHovered('contact')}
            onMouseLeave={() => setHovered(null)}
          >
            Contato
          </a>
        </li>
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: "20px", // Ajuste o padding conforme necessário
    backgroundColor: "#333",
    textAlign: "center"
  }
};

export default Navbar;
