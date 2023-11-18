import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetContacts } from 'redux/operations';

import { filterContactArr, getContacts, getUser } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {


  const token = useSelector(getUser)
  const contacts = useSelector(getContacts);
  const contactName = useSelector(filterContactArr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetContacts(token.authorizationToken ));
  }, [dispatch,token.authorizationToken]);

  const filterArr = contacts.arrContact.filter(contact =>
    contact.name
      .toLocaleLowerCase()
      .trim()
      .includes(contactName.toLocaleLowerCase().trim())
  );

  return (
    <List>
      {(contacts.isLoading && <p>Loading...</p>) ||
        filterArr.map(item => {
          return (
            <ContactItem
              name={item.name}
              phone={item.number}
              key={item.id}
              id={item.id}
            />
          );
        })}
    </List>
  );
};
