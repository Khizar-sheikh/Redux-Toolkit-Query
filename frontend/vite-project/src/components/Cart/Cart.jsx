import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity, clearCart } from '../../features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="space-y-4">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                                    <div ><img className="h-24 w-20" src={item.image} alt="" /></div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">Price: PKR{item.price}</p>
                                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                    </div>
                                    <div>
                                        <button className="text-blue-500 mr-3 font-bold text-xl" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                        <button className="text-red-500 mr-3 font-bol text-xl" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                        <button className="text-gray-500" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex justify-between">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleClearCart}>Clear Cart</button>
                            <div>
                                <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
