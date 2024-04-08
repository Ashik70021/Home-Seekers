import Items from "./Items";

const Home = () => {
    return (
        <div>
            <h1 className="text-center">From home </h1>
            <div className="text-center">
                <h1 className="text-3xl font-bold">New Features</h1>
            </div>
            <Items></Items>
        </div>
    )
};

export default Home;