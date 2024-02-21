import React from 'react';

export default function Footer() {
  return (
    <div class="p-4 mx-auto shadow sm:p-8 flex max-w-[1312px] max-h-[402px] rounded-[20px] mb-20" style={{background:'#313133'}}>
      <div class="flex-1">
        <h5 class="mb-2 text-1xl font-light text-gray-900 dark:text-white">Tertarik Untuk Memulai Bersama Kami?</h5>
        <p class="mb-5 text-base text-gray-500 content-center dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..</p>
        <div>
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Mulai Sekarang</button>
        </div>
      </div>
      <div class="flex-1 item-stretch text-base text-gray-500 dark:text-gray-400">
          <div>Tentang Kami</div>
          <div>Properti Baru</div>
          <div>Rumah123</div>
          <div>Properti Aset Bank</div>
      </div>
    </div>
  );
}
