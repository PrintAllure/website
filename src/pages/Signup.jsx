import React from "react";
import { useForm } from "react-hook-form";
import authServices from "../appwrite/auth";
import AuthInput from "../components/AuthInput";
import AuthFormWrapper from "../components/AuthFormWrapper";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignup = async (data) => {
    try {
      await authServices.signup(data);
      alert("Signup successful! Now log in.");
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <AuthFormWrapper title="Sign Up" onSubmit={handleSubmit(onSignup)} buttonText="Sign Up">
      <AuthInput
        label="Name"
        placeholder="John Doe"
        register={register("name", { required: "Name is required" })}
        error={errors.name}
      />
      <AuthInput
        label="Email"
        placeholder="you@example.com"
        type="email"
        register={register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
        })}
        error={errors.email}
      />
      <AuthInput
        label="Password"
        placeholder="••••••••"
        type="password"
        register={register("password", { required: "Password is required" })}
        error={errors.password}
      />
    </AuthFormWrapper>
  );
}

export default Signup;
