import { useParams } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useEffect, useState } from "react";
import Loader from "../../../Components/RoomsCard/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../RoomDetails/Header";
import RoomInfo from "../RoomInfo";

const RoomDetails = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [rooms, setRooms] = useState({})
    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRooms(singleRoom)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <Container>
                <Helmet>
                    <title>
                        {rooms?.title}
                    </title>
                </Helmet>
            <div className="">
                <div className="flex flex-col gap-6">
                    {/* header */}
                    <Header roomData={rooms}></Header>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-6 mt-10">
                    {/* room info */}
                    <RoomInfo roomData={rooms}></RoomInfo>
                    {/* calender */}
                    <div className="md:col-span-3 order-first md:order-last mb-10">

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;