import { useForm } from "react-hook-form";
import Container from "../../ui/Container";
import FormRow from "../FormRow/FormRow";
import Button from "../../ui/Button";

import AmazonPay from "../../assets/images/amazon-pay-logo-19613.svg";
import AmericanExpress from "../../assets/images/american-express.png";
import MasterCard from "../../assets/images/master-card.png";
import Paypal from "../../assets/images/paypal.png";
import AppleStore from "../../assets/images/available.png";
import GoogleStore from "../../assets/images/google-play-badge.svg";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRecife = (data) => console.log(data);

  return (
    <footer className="bg-light-color pt-12 pb-4">
      <Container>
        <h4 className="text-xl mb-1">Get the FreshCart app</h4>
        <p className="text-sm text-gray-500">
          We will send you a link, open it on your phone to download the app.
        </p>

        <div className="md:px-6">
          <form
            onSubmit={handleSubmit(handleRecife)}
            className="mt-6 flex justify-between items-center gap-x-12 gap-y-6 md:flex-nowrap flex-wrap"
          >
            <FormRow
              error={errors.email?.message}
              className="flex-grow max-md:basis-full"
            >
              <input
                type="email"
                placeholder="Email.."
                className="border-gray-250 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                    message: "Please write a valid Email",
                  },
                })}
              />
            </FormRow>
            <Button kind="main">Share App Link</Button>
          </form>

          <div className="flex items-center justify-between my-10 border border-gray-300 border-r-0 border-l-0 font-medium flex-wrap xl:flex-nowrap py-4">
            <div className="flex items-center gap-3 grow xl:justify-start justify-center flex-wrap md:flex-nowrap max-sm:mb-4">
              Payment Partners
              <img src={AmazonPay} alt="Amazon Pay logo" width={40} />
              <img
                src={AmericanExpress}
                alt="American Express logo"
                width={50}
              />
              <img src={MasterCard} alt="Master Card logo" width={40} />
              <img src={Paypal} alt="Paypal logo" width={50} />
            </div>
            <div className="flex items-center gap-x-3 grow xl:justify-end justify-center md:h-20 flex-wrap md:flex-nowrap">
              <p className="max-sm:w-full max-sm:text-center">
                Get deliveries with FreshCart
              </p>
              <img
                src={AppleStore}
                alt="Apple Store logo"
                className="md:max-w-[150px] max-w-20"
              />
              <img
                src={GoogleStore}
                alt="Google Store logo"
                className="md:max-w-[150px] max-w-20"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
