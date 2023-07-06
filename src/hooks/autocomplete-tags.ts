import {useState, useEffect, useRef} from "react";
import type { State, ColoredTagType } from "src/types";


type ResultType = State<ColoredTagType[]>;


function useAutocompleteTags(endpoint: string): ResultType {

  const initial_state: ResultType = {
    is_loading: true,
    error: null,
    data: []
  };
  const [autocomplete_tags, setAutocompleteTags] = useState<ResultType>(initial_state);

  

  return initial_state;
}


export default useAutocompleteTags;