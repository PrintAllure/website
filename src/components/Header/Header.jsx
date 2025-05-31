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
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          PrintAllure
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/home">Home</Link></li>
            {!auth.status && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}
            {auth.status && (
              <>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/home" className="btn btn-ghost">Home</Link>
          {!auth.status ? (
            <>
              <Link to="/login" className="btn btn-outline btn-primary">Login</Link>
              <Link to="/signup" className="btn btn-primary">Signup</Link>
            </>
          ) : (
            <>
              <span className="text-sm font-medium mr-2">
                {auth.userData?.name || auth.userData?.email}
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
