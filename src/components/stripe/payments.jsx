import { useRouter } from "next/navigation";
import StripeCheckout from "react-stripe-checkout";
export const StripeButton = ({ price }) => {
  const router = useRouter();
  const handleToken = (token) => {
    console.log(token);
    if (token) {
      console.log(token);
      router.push("success");
    }
  };
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <StripeCheckout
      stripeKey="pk_test_51H5WJcEuvU3Yjs7wpQUQyR7zO42ONE2pMfSZQnxwDQnXAlPb5RdcQsK9jo8oXPmTuMURjwtb8914DGDHMGgfzWCp00mPbjNm9e"
      token={handleToken}
      amount={price * 100}
      currency="INR"
    >
      <p className="w-fit px-2 py-1 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600">
        Pay now
      </p>
    </StripeCheckout>
  );
};
