import { Link } from "react-router-dom";

export default function Product({ id, image, name, price, addToCart }) {
  const product = { id, image, title: name, price };

  return (
    <div className="flex h-[28rem] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-gray-300 text-center font-montserrat">
      <Link to={`/shop/${id}`}>
        <div className="flex flex-col items-center justify-center">
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="h-auto max-h-[200px] max-w-[200px] flex-1 object-contain"
          />
          <div className="mt-2 w-[95%] text-lg font-medium">{name}</div>
          <div className="font-medium text-green-600">${price}</div>
        </div>
      </Link>
      <button
        className="button-74 mt-4"
        id="buton-produs"
        onClick={() => addToCart(product)}
      >
        Buy
      </button>
    </div>
  );
}
