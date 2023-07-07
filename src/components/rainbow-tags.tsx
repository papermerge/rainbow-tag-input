import Placeholder from 'react-bootstrap/Placeholder';

import useAutocompleteTags from 'src/hooks/autocomplete-tags';
import ColoredTagInput from 'src/components/colored-tag-input';
import type { ColoredTagType } from 'src/types';


type Args = {
  initial_tags: ColoredTagType[];
  onChange: (tags: ColoredTagType[]) => void;
}


function RainbowTags({initial_tags, onChange}: Args) {
  /*
  Colored Tag Input component which loads autocomplete tags from remote REST API endpoint.
  */
  const {is_loading, error, data} = useAutocompleteTags(
    'http://localhost:9000/api/tags', []
  )

  if (is_loading) {
    return (
      <Placeholder animation="glow">
         <Placeholder md={6} />
      </Placeholder>
     );
  }

  if (error) {
    return <div>Error {error}</div>
  }

  return (
    <ColoredTagInput
      initial_tags={initial_tags}
      autocomplete_tags={data}
      onChange={onChange} />
  );
}


export default RainbowTags;
