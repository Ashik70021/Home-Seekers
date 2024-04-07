import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const { user, logout} = useContext(AuthContext);
    const Link = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        {
            user && <li> <NavLink to='/about'>About</NavLink> </li>
        }
        <li> <NavLink to='/error'>Error</NavLink> </li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Home Seekers</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="profile" src={user?.photoURL ||"https://i.ibb.co/9N4MfJH/user.png"}/>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><a>{user.displayName}</a></li>
                                <li><a>Settings</a></li>
                                <li onClick={() => logout()}><a>Logout</a></li>
                            </ul>
                        </div> :
                        <a href="/login" className="btn bg-violet-500 text-white">Login</a>
         
                }

            </div>

        </div>
    );
};

export default Navbar;