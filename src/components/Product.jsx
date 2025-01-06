import { Link } from "react-router-dom";

export default function Product({ id,image, name, price }) {
    return (
      <div
        id=""
        className="flex flex-col justify-center items-center font-montserrat rounded-2xl h-[28rem] border-2 border-gray-300 text-center gap-2"
      >
        <Link to={`/shop/${id}`}>
        <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt={name}
          className="flex-1 max-w-[200px] max-h-[200px] h-auto object-contain"
          id=""
        />
        <div className="text-lg font-medium mt-2 w-[95%]">{name}</div>
        <div className="text-green-600 font-medium">${price}</div>
        </div>
        </Link>
        <button className="button-74 mt-4" id="buton-produs">
          Buy
        </button>
      </div>
    );
  }
  