import Button from "./Button";
import {BiSolidEditAlt} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
import {BsFillCartPlusFill} from "react-icons/bs";

export default function Product({ id, name, image, price, setEditedProduct }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <section>
        <h2>{name}</h2>
        <p>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}
        </p>
        <div>
          <Button
            variant="tonal"
            onClick={() =>
              setEditedProduct({
                id,
                name,
                image,
                price,
              })
            }
          >
            <BiSolidEditAlt/>
          </Button>
          <BsFillCartPlusFill/>
          <MdDelete /> 

        </div>
      </section>
    </div>
  );
}