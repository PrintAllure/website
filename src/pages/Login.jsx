import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authServices from "../appwrite/auth";
import { login as loginAction } from "../store/authSlice";
import AuthInput from "../components/AuthInput";
import AuthFormWrapper from "../components/AuthFormWrapper";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    try {
      const session = await authServices.login(data);
      if (session) {
        const userData = await authServices.getCurrentUser();
        if (userData) {
          dispatch(loginAction({ userData }));
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <AuthFormWrapper title="Login" onSubmit={handleSubmit(onLogin)} buttonText="Login">
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

export default Login;
