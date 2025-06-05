import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authServices from "../../appwrite/auth";
import { logout as logoutAction } from "../../store/authSlice";

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authServices.logout();
      dispatch(logoutAction());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="navbar bg-blue-900 shadow-md px-4 w-full text-white mr--100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          PrintAllure
        </Link>
      </div>

      <div className="flex-none">
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/place-order">Place Order</Link></li>
            {!auth.status ? (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            ) : (
              <>
                <li><span className="text-sm font-semibold">Hi, {auth.userData?.name}</span></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="btn btn-ghost">Home</Link>
          <Link to="/about" className="btn btn-ghost">About</Link>
          <Link to="/products" className="btn btn-ghost">Products</Link>
          <Link to="/cart" className="btn btn-ghost">Cart</Link>
          <Link to="/place-order" className="btn btn-ghost">Place Order</Link>

          {!auth.status ? (
            <>
              <Link to="/login" className="btn btn-outline btn-primary">Login</Link>
              <Link to="/signup" className="btn btn-primary">Signup</Link>
            </>
          ) : (
            <>
              <span className="text-sm font-medium mr-2">
                Hi, {auth.userData?.name}
              </span>
              <button onClick={handleLogout} className="btn btn-error btn-sm">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
