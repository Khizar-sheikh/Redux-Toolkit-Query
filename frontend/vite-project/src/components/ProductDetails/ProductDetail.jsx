import { useParams } from 'react-router-dom';
import { addItem } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

/*eslint-disable */
const ProductDetail = ({ products }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const { productId } = useParams();
    const product = products.find(product => product.id === parseInt(productId));

    if (!product) {
        return <div className="text-center mt-10">Product not found</div>;
    }

    const handleAddtoCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:ml-12">
                        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
                        <p className="text-lg mb-4">{product.description}</p>
                        <p className="text-lg mb-4">Price: ${product.price}</p>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Specifications:</h3>
                            <ul>
                                <li>Display: {product.specs.display}</li>
                                <li>Sensors: {product.specs.sensors}</li>
                                <li>Water Resistance: {product.specs.waterResistance}</li>
                                <li>Battery Life: {product.specs.batteryLife}</li>
                            </ul>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleAddtoCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;
