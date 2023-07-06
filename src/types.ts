

export type ColoredTagType = {
  name: string;
  fg_color: string;
  bg_color: string;
}

export type State<T> = {
  is_loading: boolean;
  error: string | null;
  data: T | null;
}
