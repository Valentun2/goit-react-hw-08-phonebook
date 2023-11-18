import { fetchDeleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Button, Contact,Name } from './ContactItem.styled';
export const ContactItem = props => {
  const dispatch = useDispatch();

  const onClick = evt => {
    console.log('object');
    dispatch(fetchDeleteContact(evt.currentTarget.id));
  };

  return (
    <Contact>
      <Name>
        {props.name}:{props.phone}
      </Name>
      <Button id={props.id} name={props.name} type="button" onClick={onClick}>
        Delete
      </Button>
    </Contact>
  );
};
