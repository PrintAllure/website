import React from "react";

function AuthFormWrapper({ title, onSubmit, children, buttonText }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {children}
          <input type="submit" value={buttonText} className="btn btn-primary w-full" />
        </form>
      </div>
    </div>
  );
}

export default AuthFormWrapper;
