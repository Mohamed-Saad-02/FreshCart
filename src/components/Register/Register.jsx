import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "../../services/auth";

import FormRow from "../FormRow/FormRow";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = useForm();

  const registerUser = async (formData) => {
    setIsLoading(true);
    const data = await signUp(formData);
    setIsLoading(false);

    if (data.message === "success") {
      toast.success("Email success created");
      navigate("/auth", { replace: true });
    } else toast.error(data.message);
  };

  return (
    <form className="mt-6 space-y-3" onSubmit={handleSubmit(registerUser)}>
      <FormRow error={errors.name?.message}>
        <input
          type="text"
          id="name"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          autoComplete="off"
          autoFocus
          {...register("name", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z]\w{2,10}$/,
              message: "Please write a valid name ex(Mohamed)",
            },
          })}
        />
      </FormRow>
      <FormRow error={errors.email?.message}>
        <input
          type="email"
          id="email"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          autoComplete="off"
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
      <FormRow error={errors.password?.message}>
        <input
          type="password"
          id="password"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          autoComplete="off"
          {...register("password", {
            required: "This field is required",
            pattern: {
              value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
              message:
                "Password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.",
            },
          })}
        />
      </FormRow>
      <FormRow error={errors.rePassword?.message}>
        <input
          type="password"
          id="rePassword"
          className="border-gray-400 text-gray-900 text-sm rounded-lg focus:border-main-color block w-full p-2.5 outline-none border"
          autoComplete="off"
          {...register("rePassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
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

      <div className="flex items-center gap-3 justify-end pt-8">
        <Button type="reset" disabled={isLoading} kind="second">
          Reset
        </Button>
        <Button disabled={isLoading} kind="main" type="submit">
          {isLoading ? (
            <div role="status" className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            "Register"
          )}
        </Button>
      </div>
    </form>
  );
}

export default Register;
