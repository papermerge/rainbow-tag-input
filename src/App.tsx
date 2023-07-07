import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Placeholder } from 'react-bootstrap';

import './App.scss';
import RainbowTags from 'src/components/rainbow-tags';

import type { ColoredTagType } from 'src/types';
import { Button } from 'react-bootstrap';


function App() {
  const [show_tags, setShowTags] = useState(false);

  const endpoint_url: string = 'http://localhost:9000/api/tags';
  const headers: HeadersInit = [];

  let initial_tags: ColoredTagType[] = [
    {
      name: "important",
      fg_color: "white",
      bg_color: "red"
    },
    {
      name: "paid",
      fg_color: "white",
      bg_color: "blue"
    },
  ];

  const onChange = (tags: ColoredTagType[]) => {
    console.log(`Current list of tags is:`);

    for (const tag of tags) {
      console.log(`${tag.name} ${tag.fg_color} ${tag.bg_color}`);
    }
  }

  const onClick = () => {
    setShowTags(!show_tags);
  }

  return (
    <Container className="m-2">
      <Row>
        <Col>
          <Button onClick={onClick}>
            {show_tags ? "hide tags" : "show tags"}
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          {show_tags && <RainbowTags
            endpoint_url={endpoint_url}
            headers={headers}
            initial_tags={initial_tags}
            onChange={onChange} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
