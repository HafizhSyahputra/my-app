import React from "react";
import Header2 from "../components/header2";

export default function buypage() {
  return (
    <div>
      <div class="fixed sticky top-0 z-50">
        <Header2 />
      </div>
      <div>
        <h1 class="text-white mt-14 ml-36 text-3xl font-bold">Rumah Dijual</h1>
        <h2 class="text-white mt-5 ml-36 font-light">
          1.351.732 Rumah ditemukan | 1 dari 500 Halaman
        </h2>
        <div class="flex">
          <h2 class="text-white mt-10 ml-36 font-light">Filter dengan :</h2>
          <button
            type="button"
            class="bg-red-600 text-center w-[180px] text-white rounded-[10px] h-[38px] mt-8"
            >
            <img src="/diskon.png" class="w-[20px] h-[20px]"></img>
            
          </button>
        </div>
      </div>
    </div>
  );
}
