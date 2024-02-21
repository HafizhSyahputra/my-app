import React from "react";

export default function Maps(){
    return(
        <div className="text-white">
            <div className="card-container flex justify-center" style={{borderRadius:'35px', display:'flex', flexDirection:'column', alignItems:'center', width:'85%', marginLeft:'110px', background:'#242629', justifyContent:'center'}}>
                <h1 className="font-bold mt-14 text-3xl">Jaringan Properti Internasional</h1>
                <h2 className="mt-5 flex text-center">Jangkauan global kami membuka pintu ke properti eksklusif dan memberikan Anda pemandangan<br></br> landscape real estateinternasional.</h2>
                <img className="mt-10 mb-10" src="/worldMap.png"></img>
            </div>
        </div>
    );
}
