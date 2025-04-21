import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2025 Muhammad Iffatul Ammar. All rights reserved.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Follow Me:</p>
            <div>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                Twitter
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Contact: <a href="mailto:muhammad.ammar@example.com" className="text-white">muhammad.ammar@example.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
