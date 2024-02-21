import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <p>Lorem ipsum dolor sit amet consectetur</p>

      <div className="bottom-card">
        <p>
          <i>Carin</i>
        </p>
        <div className="button-area">
          <button>
            <IoMdCheckmark className="check-icon" />
          </button>
          <button>
            <FaRegTrashAlt className="trash-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
