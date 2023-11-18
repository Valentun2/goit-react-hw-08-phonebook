import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { fetchAddContact } from 'redux/operations';
import { Button, FormContact, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const isUser = contacts.arrContact.find(
      ({ name }) => name === evt.target.name.value
    );
    if (isUser) {
      toast.error(`${evt.target.name.value} is alredy in contacts`);
      return;
    }

    const arr = {
      name: evt.target.name.value,
      number: evt.target.number.value,
    };

    dispatch(fetchAddContact(arr));
    evt.target.reset();
  };

  return (
    <FormContact onSubmit={onSubmit}>
      <label>
        Name
        <Input type="text" name="name" required pattern="^[a-zA-Z]+$" />
      </label>
      <label>
        Number
        <Input type="tel" name="number" required pattern="^[ 0-9]+$" />
      </label>
      <Button>Add contact</Button>
      <Toaster />
    </FormContact>
  );
};
