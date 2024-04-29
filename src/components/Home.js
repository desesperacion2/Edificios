import React from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from './NavBar'; // Importa el componente Navbar
import Footer from './Footer'; // Importa el componente Footer
import { Container } from 'react-bootstrap';

function Home() {
  const { t } = useTranslation();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar /> {/* Usa el componente Navbar */}
      <Container fluid style={{ flex: "1" }}>
        {/* Contenido de la página */}
      </Container>
      <Footer /> {/* Usa el componente Footer */}
    </div>
  );
}

export default Home;
