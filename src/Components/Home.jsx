import { Helmet} from 'react-helmet-async'
import Banner from "./Banner";
import Items from "./Items";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Seekers | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="text-center">
                <h1 className="text-3xl font-bold">New Features</h1>
            </div>
            <Items></Items>
        </div>
    )
};

export default Home;