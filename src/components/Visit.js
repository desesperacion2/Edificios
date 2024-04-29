import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

function Visit() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/departments')
      .then(response => {
        // Asegúrate de que cada objeto del departamento tiene una propiedad `Number`
        setDepartments(response.data);
      })
      .catch(error => {
        // Manejo de error
        setMessage('Error al recuperar los departamentos');
        console.error('Hubo un error al recuperar los departamentos:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const visita = {
        departamento: selectedDepartment,
        nombre,
        fecha,
        hora
      };
      const response = await axios.post('http://localhost:8000/api/visitas', visita);
      setMessage('Visita registrada con éxito');
      // Restablece el estado de tus campos de formulario aquí
      setSelectedDepartment('');
      setNombre('');
      setFecha('');
      setHora('');
      console.log(response.data); // Para confirmar que la visita se ha guardado
    } catch (error) {
      setMessage('Error al registrar la visita');
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          {message && <Alert variant={message.startsWith('Error') ? 'danger' : 'success'}>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="visitasForm.DepartmentSelect">
              <Form.Label>Departamento</Form.Label>
              <Form.Control as="select" value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)}>
                <option value="">Seleccione un departamento</option>
                {departments.map((dept, index) => (
                  // Asegúrate de que aquí estás accediendo a la propiedad correcta del objeto del departamento
                  <option key={index} value={dept.Number}>{dept.Number}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="visitasForm.Nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="visitasForm.Fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={e => setFecha(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="visitasForm.Hora">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                value={hora}
                onChange={e => setHora(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrar Visita
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Visit;
