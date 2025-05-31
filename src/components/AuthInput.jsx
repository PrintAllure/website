import React from "react";

function AuthInput({ label, type = "text", register, error, placeholder }) {
  return (
    <div className="form-control w-full max-w-sm">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        {...register}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default AuthInput;
