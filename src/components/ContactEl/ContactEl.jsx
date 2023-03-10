import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ElWraper, ElButton } from './ContactEl.styled';

export const ContactEl = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <ElWraper>
      <p>{name}:</p>
      <span>{number}</span>
      <ElButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ElButton>
    </ElWraper>
  );
};

ContactEl.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
