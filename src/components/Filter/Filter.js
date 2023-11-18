import { setFilter } from 'redux/filterSlise';
import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label >
      Find contact by name
      <Input
        type="text"
        name="filter"
        onChange={onChange}
        pattern="^[a-zA-Z]+$"
      />
    </label>
  );
};
