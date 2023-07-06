import React, { useState } from 'react';
import ColoredTag from 'src/components/colored-tag';
import type { ColoredTagType } from 'src/types';



export default function ColoredTagInput() {
  const [terms, setTerms] = useState<ColoredTagType[]>([]);
  const [value, setValue] = useState('');

  let colored_tags;


  const new_tag = (tag_name: string): ColoredTagType => {
    let trimmed_name = tag_name.replace(',', '')

    return {
      name: trimmed_name,
      fg_color: 'white',
      bg_color: 'green'
    }
  }

  const onkeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    const currentValue = value.trim()

    if (key === 'Tab' && currentValue !== '') {
      event.preventDefault();
      setTerms([...terms, new_tag(currentValue)]);
      setValue('');
    }
  }

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const onRemoveHandler = (name: string) => {
    const new_tag_list = terms.filter((i: ColoredTagType) => i.name !== name);
    setTerms(new_tag_list);
  }

  colored_tags = terms.map((item) => {
    return <ColoredTag key={item.name} value={item} onRemove={onRemoveHandler}/>;
  });

  return (
    <div>
      {colored_tags}
      <input
        type="text"
        placeholder="enter new tag"
        onKeyDown={onkeydown}
        onChange={onchange}
        value={value} />
    </div>
  );
}
