import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import useSelect from "../../../Hooks/useSelect";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [selectclass] = useSelect();
  const location = useLocation();
  const data = location.state;
  const price = parseFloat(data.price.toFixed(2));
  console.log(data);

  return (
    <div className="w-full">
      <h2 className="text-3xl text-center">Please pay hear ${price}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={price}
          data={data}
          selectclass={selectclass}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
