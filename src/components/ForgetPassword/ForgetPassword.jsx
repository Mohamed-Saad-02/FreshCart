import { useForm } from "react-hook-form";

import FormRow from "../FormRow/FormRow";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

import { useForgetPassword } from "../../hooks/Auth/useForgetPassword";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();
  const { isPending, forgetPassword } = useForgetPassword();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleData = (data) =>
    forgetPassword(data, { onSuccess: () => navigate("verifyCode") });

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <FormRow error={errors.email?.message}>
        <input
          type="email"
          id="email"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
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

      <div className="flex items-center gap-3 justify-end pt-8">
        <Button type="reset" disabled={isPending} kind="second">
          Reset
        </Button>
        <Button disabled={isPending} kind="main" type="submit">
          {isPending ? (
            <div role="status" className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            "Verify"
          )}
        </Button>
      </div>
    </form>
  );
}

export default ForgetPassword;
