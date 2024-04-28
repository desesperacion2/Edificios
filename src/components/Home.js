import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <style>
        {`
          .navbar-link:hover {
            background-color: #C2FAFB; /* Color de fondo al pasar el mouse sobre los enlaces */
            border-radius: 10px; /* Agregando el borderRadius al pasar el mouse */
          }
        `}
      </style>
      <Navbar bg="info" expand="lg" className="mx-3 my-3 rounded">
        <Container fluid>
          <Navbar.Brand className='ml-3' href="/home" style={{ fontSize: '1.2rem' }}>{t('welcome')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-evenly">
              <Nav.Link href="/Home" className="navbar-link">{t('home')}</Nav.Link>
              <Nav.Link href="/correspondencia" className="navbar-link">{t('delivery')}</Nav.Link>
              <Nav.Link href="/visitas" className="navbar-link">{t('visitors')}</Nav.Link>
              <Nav.Link href="/vehiculos" className="navbar-link">{t('vehicles')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;
