import type { ColoredTagType } from 'src/types';


type Args = {
  value: ColoredTagType;
  onRemove: (value: string) => void;
}


function ColoredTagComponent({
  value,
  onRemove
}: Args): JSX.Element {

  const onRemoveHandler = () => {
    onRemove(value.name);
  }

  return (
    <span
      className="badge"
      style={{backgroundColor: value.bg_color, color: value.fg_color}}>
        {value.name}
        <button className="btn" onClick={onRemoveHandler}>x</button>
    </span>
  )
}


export default ColoredTagComponent;
