import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../shared/Container/Container";
import Card from "./Card";

const Rooms = () => {
    const [rooms , setRooms] = useState([]);
    const [params,]= useSearchParams();
    const category = params.get('category')
    useEffect(()=>{
        fetch('rooms.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const fileredRooms = data.filter(room=> room.category == category)
                setRooms(fileredRooms)
                console.log(category)
            }else{
                setRooms(data)
            }
            // setRooms(data)
        })
    },[category])
    return (
      <Container>
       <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
       {
            rooms.map((room,index)=> <Card
            key={index}
            room={room}
            ></Card>)
        }
       </div>
      </Container>
    );
};

export default Rooms;