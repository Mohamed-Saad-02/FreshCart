import { useForm } from "react-hook-form";
import FormRow from "../FormRow/FormRow";
import { useResetPassword } from "../../hooks/Auth/useResetPassword";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const { isPending, resetPassword } = useResetPassword();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleData = (data) => {
    console.log(data);

    resetPassword(data, { onSuccess: () => navigate("/") });
  };

  return (
    <form onSubmit={handleSubmit(handleData)} className="space-y-4">
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
      <FormRow error={errors.newPassword?.message}>
        <input
          type="password"
          id="newPassword"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          {...register("newPassword", {
            required: "This field is required",
            pattern: {
              value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
              message:
                "Password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.",
            },
          })}
        />
      </FormRow>

      <div className="flex items-center gap-3 justify-end pt-8">
        <Button disabled={isPending} kind="main" type="submit">
          {isPending ? (
            <div role="status" className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            "Reset Password"
          )}
        </Button>
      </div>
    </form>
  );
}

export default ResetPassword;
