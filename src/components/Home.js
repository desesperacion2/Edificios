import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-3">
        <Container fluid>
          <Navbar.Brand href="/home">{t('welcome')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-evenly">
              <Nav.Link href="/Home">{t('home')}</Nav.Link>
              <Nav.Link href="/correspondencia">{t('delivery')}</Nav.Link>
              <Nav.Link href="/visitas">{t('visitors')}</Nav.Link>
              <Nav.Link href="/vehiculos">{t('vehicles')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Home;
