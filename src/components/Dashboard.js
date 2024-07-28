import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Emergencies } from "./Emergencies";
import { api } from "../lib/axios";
import axios from "axios";

// const [data, setdata] = useState([]);
export const Dashboard = () => {
useEffect(()=>{
    axios.get('https://emergencyh.vercel.app/users/login')
    .then(res => console.log(res))
    .catch(err =>console.log(err));
},[]) 


  // console.log(data);
  return (
    <div>
      <Sidebar />
      <Header />
      <Outlet />
      <Emergencies/>
    </div>
  );
};
