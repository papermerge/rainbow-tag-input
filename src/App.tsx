import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';
import ColoredTagInput from 'src/components/colored-tag-input';


function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <ColoredTagInput />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
