import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
  {
    name: 'Muhammad Iffatul Ammar',
    position: 'Frontend Developer',
    image: 'https://ui-avatars.com/api/?name=Muhammad+Iffatul+Ammar&background=0D8ABC&color=fff&size=300'
  },
  {
    name: 'Fulanah Salsabila',
    position: 'UI/UX Designer',
    image: 'https://ui-avatars.com/api/?name=Fulanah+Salsabila&background=6C757D&color=fff&size=300'
  },
  {
    name: 'Ahmad Rofiq',
    position: 'Project Manager',
    image: 'https://ui-avatars.com/api/?name=Ahmad+Rofiq&background=198754&color=fff&size=300'
  }
];

function Team() {
  return (
    <section id="team" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={member.image} alt={member.name} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.position}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Team;
