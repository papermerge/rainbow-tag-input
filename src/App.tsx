import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';
import ColoredTagInput from 'src/components/colored-tag-input';
import RainbowTags from 'src/components/rainbow-tags';

import type { ColoredTagType } from 'src/types';


function App() {
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
  let autocomplete_tags: ColoredTagType[] = [
    {
      name: "awo",
      fg_color: "white",
      bg_color: "#aa5151"
    },
    {
      name: "bvg",
      fg_color: "white",
      bg_color: "#293778"
    }
  ];

  const onChange = (tags: ColoredTagType[]) => {
    console.log(`Current list of tags is:`);

    for (const tag of tags) {
      console.log(`${tag.name} ${tag.fg_color} ${tag.bg_color}`);
    }
  }

  return (
    <Container className="m-2">
      <Row className="justify-content-center">
        <Col md={5}>
          <ColoredTagInput
            initial_tags={initial_tags}
            autocomplete_tags={autocomplete_tags}
            onChange={onChange} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={5}>
          <RainbowTags />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
