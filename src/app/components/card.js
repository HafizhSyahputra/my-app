import React from 'react';

export default function CardPage() {
  return (
    <div class="flex gap-10">
            {/* Beli rumah */}
    <div class="w-full max-w-sm p-4 rounded-lg shadow sm:p-8" style={{background:'#242629', borderRadius:'25px'}}>
      <div class="flex items-center w-40">
        <img src="/beliRumah.png" class="ml-20 mr-10 mt-8"></img>
      </div>
      <div class="text-white font-bold flext text-2xl text-center">
        <h5>Membeli Rumah</h5>
      </div>
      <div class="text-white font-light text-1xl mt-3 text-center flex">
      <h1>Temukan tempat Anda dengan pengalaman foto yang mendalam dan daftar properti terbanyak, termasuk hal-hal yang tidak akan Anda temukan di tempat lain</h1>
      </div>
      <a
        type="button" style={{marginLeft:'54px'}}
        href='/beliRumah'
        class="text-red-600 flex mt-14 border border-red-600 md:border-red-700 focus:ring-4 focus:outline-none dark:hover:bg-red-700 hover:text-white  font-bold rounded-lg text-sm px-5 py-2.5 justify-center w-52 text-center"
        >
        Menelusuri Rumah 
        </a>
    </div>
        {/* Jual Rumah */}
        <div class="w-full max-w-sm p-4 rounded-lg shadow sm:p-8" style={{background:'#242629', borderRadius:'25px'}}>
      <div class="flex items-center w-40">
        <img src="/sewaRumah.png" class="ml-20 mr-10 mt-8"></img>
      </div>
      <div class="text-white font-bold flext text-2xl text-center">
        <h5>Sewa Rumah</h5>
      </div>
      <div class="text-white font-light text-1xl mt-3 text-center flex">
      <h1>Kami sedang menciptakan pengalaman online yang mulus mulai dari berbelanja di jaringan rental terbesar, hingga mengajukan, hingga membayar sewa.</h1>
      </div>
      <button
        type="button" style={{marginLeft:'54px'}}
        class="text-red-600 flex mt-20 border border-red-600 md:border-red-700 hover:text-white focus:ring-4 focus:outline-none dark:hover:bg-red-700  font-bold rounded-lg text-sm px-5 py-2.5 justify-center w-52 text-center"
        >
        Menemukan Penawaran 
        </button>
    </div>
    </div>
    
  );
}

