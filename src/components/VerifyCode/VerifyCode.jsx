import { useForm } from "react-hook-form";
import FormRow from "../FormRow/FormRow";
import { useVerifyResetCode } from "../../hooks/Auth/useVerifyResetCode";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

function VerifyCode() {
  const navigate = useNavigate();
  const { isPending, resetCode } = useVerifyResetCode();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleData = (data) =>
    resetCode(data, {
      onSuccess: () => navigate("/passwordProcess/resetPassword"),
    });

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <FormRow error={errors.code?.message}>
        <input
          type="number"
          id="code"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          {...register("resetCode", {
            required: "This field is required",
            pattern: {
              value: /[1-9]{1,6}/,
              message: "Please write a valid Code",
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

export default VerifyCode;
