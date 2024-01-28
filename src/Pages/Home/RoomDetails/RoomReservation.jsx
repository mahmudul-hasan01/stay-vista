// import { formatDistance } from 'date-fns'
import Button from "../../../Components/Button/Button";
import Calender from "./Calender";
// import { useState } from 'react';

const RoomReservation = ({ roomData }) => {
    // const totalDays = parseInt(
    //         formatDistance(new Date(roomData?.to), new Date(roomData?.from)).split(' ')[0]
    //       )
    // const totalPrice = totalDays * roomData?.price
    // const [value,setValue] = useState({
    //     startDate: new Date(roomData?.from),
    //     endDate: new Date(roomData?.to),
    //     key: 'selection'
    // })
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {roomData?.price} </div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender ></Calender>
            </div>
            <hr />
            <div className="p-4 ">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="flex p-4 items-center justify-between font-semibold text-lg">
                <div>total</div>
                <div>$ {roomData?.price}</div>
            </div>
        </div>
    );
};

export default RoomReservation;