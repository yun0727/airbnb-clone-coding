import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getRoom } from "../api";

export default function RoomDetail(){
  const {roomPk} = useParams();
  const {} = useQuery([`room:${roomPk}`],getRoom)
  return <h1>hello</h1>
}