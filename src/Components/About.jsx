import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./AuthProvider";

const About = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className="text-center mt-24">
            <Helmet>
                <title>Home Seekers | User Profile</title>
            </Helmet>
            <div className="border">
                <div className="avatar flex justify-center">
                    <div className="w-[25%] rounded-full ">
                        <img src={user?.photoURL || "https://i.ibb.co/9N4MfJH/user.png"} />
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-xl font-semibold ">Name : {user.displayName}</h1>
                    <h1 className="text-xl font-semibold ">Email : {user.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default About;