import { useForm } from "react-hook-form";
import FormRow from "../FormRow/FormRow";
import { signIn } from "../../services/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useState } from "react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { handleUserInfo } = useUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginUser = async (formData) => {
    setIsLoading(true);
    const data = await signIn(formData);
    setIsLoading(false);
    if (data.message === "success") {
      toast.success(`Welcome ${data.user.name}`);
      handleUserInfo(data);

      navigate("/", { replace: true });
    } else toast.error(data.message);
  };

  return (
    <form className="mt-6 space-y-3" onSubmit={handleSubmit(loginUser)}>
      <FormRow error={errors.email?.message}>
        <input
          type="email"
          id="email"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors.password?.message}>
        <input
          type="password"
          id="password"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <div className="flex items-center gap-3 justify-between pt-8">
        <Link to="/passwordProcess" className="text-gray-500 hover:underline">
          Forget your password?
        </Link>
        <div className="flex items-center gap-3">
          <Button type="reset" disabled={isLoading} kind="second">
            Reset
          </Button>
          <Button disabled={isLoading} kind="main" type="submit">
            {isLoading ? (
              <div role="status" className="flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Login;
