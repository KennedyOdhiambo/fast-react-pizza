import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button type={'small'} onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};

DeleteItem.propTypes = {
  pizzaId: PropTypes.any.isRequired,
};

export default DeleteItem;