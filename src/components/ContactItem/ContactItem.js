import { fetchDeleteContact } from 'redux/operations';
import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { Button } from './ContactItem.styled';
export const ContactItem = props => {
  const dispatch = useDispatch();

  const onClick = evt => {
    console.log('object');
    dispatch(fetchDeleteContact(evt.currentTarget.id));
  };

  return (
    <li className={styles.item}>
      <p>
        {props.name}:{props.phone}
      </p>
      <Button id={props.id} name={props.name} type="button" onClick={onClick}>
        Delete
      </Button>
    </li>
  );
};
