import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';

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
    <Row className="justify-content-center mt-5">
      <Col xs={12} sm={8} md={6}>
        <div>
          <h2>{t('login')}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                type="text"
                placeholder={t('login.username')}
                value={username}
                onChange={(e) => SetUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder={t('login.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('login')}
            </Button>
          </Form>
          <br />
        </div>
      </Col>
    </Row>
  );
}

export default Login;
