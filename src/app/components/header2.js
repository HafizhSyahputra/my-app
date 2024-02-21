'use client'
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav class="bg-white border-gray-200 sticky top-0 fixed w-full z-50" style={{background:'#16161A'}}>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/Logo-2.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SerasiHunian</span>
      </a>
      <ul class="flex flex-col gap-10 p-4 md:p-0 mt-20 font-medium border rounded-lgmd:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li>
        <a href="/" class="block py-2 px-3 text-red-500 rounded md:bg-transparent md:p-0 " aria-current="page">Jual Rumah</a>
      </li>
      <li>
        <a href="/sewaRumah" class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Sewa Rumah</a>
      </li>
      </ul>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white hover:text-red-700  focus:outline-none font-medium text-sm px-4 py-2 text-center">Masuk</button>
        <button type="button" class="text-white bg-red-700 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center dark:bg-red-600 dark:hover:bg-red-400 dark:focus:ring-red-800">Daftar</button>
      </div>
    </div>
  </nav>
  );
}
