import { useForm } from "react-hook-form";

import Container from "../ui/Container";
import FormRow from "../components/FormRow/FormRow";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import useCreateCashOrder from "../hooks/order/useCreateCashOrder";
import { useCart } from "../hooks/cart/useCart";
import NoProduct from "../components/NoProduct/NoProduct";

function CheckOut() {
  const { isChecking, checkout } = useCreateCashOrder();
  const { data: { data: { products = [] } = {} } = {} } = useCart();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  if (!products.length)
    return <NoProduct message="Please Add Products To Card First 😥" />;

  const handleData = (data) => checkout(data);

  return (
    <section className="h-full flex items-center justify-center py-8 md:w-3/4 lg:w-1/2 mx-auto">
      <Container>
        <h1 className="text-2xl font-semibold text-main-color">Checkout</h1>
        <form className="mt-6 space-y-3" onSubmit={handleSubmit(handleData)}>
          <FormRow error={errors.details?.message}>
            <input
              type="text"
              id="details"
              className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
              {...register("details", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow error={errors.phone?.message}>
            <input
              type="tel"
              id="phone"
              className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
              autoComplete="off"
              {...register("phone", {
                required: "This field is required",
                pattern: {
                  value: /^(\+2|002)?01[1025][0-9]{8}/,
                  message: "Type a valid number egyptian phone",
                },
              })}
            />
          </FormRow>
          <FormRow error={errors.city?.message}>
            <input
              type="text"
              id="city"
              className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
              {...register("city", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <div className="flex items-center gap-3 justify-end pt-8">
            <Button type="reset" disabled={isChecking} kind="second">
              Reset
            </Button>
            <Button disabled={isChecking} kind="main" type="submit">
              {isChecking ? (
                <div role="status" className="flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                "Checkout"
              )}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default CheckOut;
