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
      className="badge m-1"
      style={{backgroundColor: value.bg_color, color: value.fg_color}}>
        {value.name}
        <button className='btn btn-sm' onClick={onRemoveHandler}>
          <i className='bi bi-x' style={{color: value.fg_color}}></i>
        </button>
    </span>
  )
}


export default ColoredTagComponent;
