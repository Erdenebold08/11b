import Image from "next/image";
import localFont from "next/font/local";
import {useState} from "react"

export default function Home() {
    const[search, setSearch ] = useState("");
        console.log("search utga ----->" , search);
  return (
    <div className="flex bg-skye items-center justify-center h-screen flex-col">
        <div className="w-96 rounded-2xl bg-slate-400 h-80 bg-slate-400  ">
            <p className="flex justify-center mt-10 mb-10 text">MOLOR</p>
        <div className="flex flex-col justify-center ">
            <p>Email: {search}</p>
        <input 
        type="email"
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-black rounded"
        />
        <p>Password: {search}</p>
        <input 
        type="Password"
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-black rounded"
        />
        </div>
        </div>
       

    </div>
  );
} 