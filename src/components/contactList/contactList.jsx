import { ListContainer, StyledList, Contact, Name, ButtonDelete, Number } from "./contactList.styled";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ListContainer>
            <StyledList>
            {contacts.map(contact => <Contact key={contact.id}>
                    <Name>{contact.name}</Name>
                    <Number>{contact.number}</Number>
                    <ButtonDelete type='button' onClick={() =>onDelete(contact.id)}>Delete</ButtonDelete>
                </Contact>)}
            </StyledList>
        </ListContainer>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onDelete: PropTypes.func.isRequired,
};