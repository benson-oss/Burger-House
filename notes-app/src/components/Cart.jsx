import CartItem from "./CartItem";

export default function Cart({ cart, onRemove }) {
  return (
    <div>
      <h2>🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={onRemove}
          />
        ))
      )}
    </div>
  );
}