import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Footer from './Footer'; // Importa el componente de footer

function Login() {
  const { t } = useTranslation();
  const [username, SetUser] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/", {
        username, password
      });
      if (response.data === "exist") {
        history("/Home", { state: { id: username } });
      } else if (response.data === "notexist") {
        alert(t('userNotRegistered'));
      }
    } catch (e) {
      alert(t('loginError'));
      console.log(e);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100"> {/* Agrega esta clase para que el footer se quede abajo */}
      <header>
        <h1 className='text-primary text-center display-2'>BuildingBuddy</h1>
      </header>
      <main className="flex-grow-1">
        <Row className="justify-content-center mt-5 p-3 bg-info rounded mx-3">
          <Col xs={12} sm={8} md={6}>
            <div>
              <h1>{t('login')}</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className= "my-4" controlId="formBasicUsername">
                  <Form.Control
                    type="text"
                    placeholder={t('login.username')}
                    value={username}
                    onChange={(e) => SetUser(e.target.value)}
                    className="form-control-lg"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder={t('login.password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control-lg"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-lg">
                  {t('login')}
                </Button>
              </Form>
              <br />
            </div>
          </Col>
        </Row>
      </main>
      <Footer /> {/* Agrega el componente de footer */}
    </div>
  );
}

export default Login;
