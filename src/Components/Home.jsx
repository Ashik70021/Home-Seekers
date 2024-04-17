import { Helmet} from 'react-helmet-async'
import Banner from "./Banner";
import Items from "./Items";
import 'animate.css';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Seekers | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="text-center">
                <h1 className="mt-16 text-3xl font-bold animate__backInRight">New Features</h1>
            </div>
            <Items></Items>
        </div>
    )
};

export default Home;