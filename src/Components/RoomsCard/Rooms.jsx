import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Container/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "./Heading";
import Loader from "./Loader";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params,setParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const categorys = params.get('category')

    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                if(categorys){
                    const filtered = data.filter(room => room?.category === categorys)
                    setRooms(filtered)
                }else{
                    setRooms(data)
                }
                setLoading(false)
            })
    }, [categorys])
    if(loading){
       return <Loader></Loader>
    }
    return (
        <Container>
            {
                rooms && rooms.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {
                    rooms.map(room => <Card key={room._id} room={room}></Card>)
                }
            </div> :
            <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <Heading center={true} title='No Rooms Available In This Category' subtitle='Please Select Other Categorys'></Heading>
            </div>
            }
        </Container>
    );
};

export default Rooms;