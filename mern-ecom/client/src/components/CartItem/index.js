import React from 'react';
import { idbPromise } from "../../utils/helpers";
import { useDispatch } from 'react-redux';
import { actionRemoveFromCart, actionUpdateCartQuatity } from '../../redux/user/userAction';

const CartItem = ({ item }) => {

  console.log('--------------', item)

  const dispatch = useDispatch();

  const removeFromCart = item => {
    dispatch(actionRemoveFromCart({ _id: item._id }));
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch(actionRemoveFromCart({
        _id: item._id
      }));
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch(actionUpdateCartQuatity({
        _id: item._id,
        purchaseQuantity: parseInt(value)
      }));
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
