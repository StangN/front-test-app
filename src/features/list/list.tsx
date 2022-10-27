import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectItems,
  addItem,
  removeItem
} from './listSlice';
import './list.scss';  
import { ListButton } from '../../components/listButton';


export function List() {
  const [ input, setInput ] = useState('');
  const [ id, setId] = useState(0);
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();
  var counter = 0;

  function handleItemChange(e: any) {
    setInput(e.target.value);
  }

  function handleIdChange(e: any) {
    setId(e.target.value);
  }

  return (
    <div>
      <div>
        <input onChange={handleItemChange} />
        <ListButton onClickAction={() => dispatch(addItem(input))} text = 'Add item' />
      </div>
      <div className='Row'>
        <ListButton onClickAction={() => dispatch(removeItem(id-1))} text = 'Remove item №' />
        <input onChange={handleIdChange} />
      </div>
      <div>
        <ul>{items.map(item => <li id={(counter++).toString()}>{item}</li>)}</ul>
      </div>
    </div>
  );
}
