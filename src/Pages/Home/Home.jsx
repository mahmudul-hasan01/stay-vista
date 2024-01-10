import { Helmet } from "react-helmet-async";
import Categories from "../../Components/RoomsCard/Categories";
import RoomsCard from "../../Components/RoomsCard/Rooms";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Stay Vista </title>
            </Helmet>
            <Categories></Categories>
            <RoomsCard></RoomsCard>
        </div>
    );
};

export default Home;