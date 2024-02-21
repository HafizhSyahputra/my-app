import React from "react";

export default function CardProperty() {
  return (
    <div
    className="text-white" 
    style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginLeft: '110px', marginTop: '60px' }}>
      {/* first card */}
        <div
          href="#"
          className="shadow p-6 rounded-xl"
          style={{ borderRadius: '20px',width:'402px', height:'100', paddingLeft: '20px', paddingBottom: '40px', background: 'rgba(140, 140, 140, 0.1)' }}
        >
          <h1 
          className="text-6xl font-bold pl-10 mt-10 mb-2">17K</h1>
          <p className="text-2xl mt-10 pl-10">Pelanggan Yang Puas</p>
        </div>

      {/* second card */}
        <div
          href="#"
          className="shadow p-6 rounded-xl"
          style={{borderRadius: '20px',width:'402px', height:'100', paddingLeft: '20px', paddingBottom: '40px', background: 'rgba(140, 140, 140, 0.1)' }}
        >
          <h1 
          className="text-6xl font-bold pl-10 mt-10 mb-2">150+</h1>
          <p className="text-2xl mt-10 pl-10">Pemenang Penghargaan</p>
        </div>

      {/* third card */}
        <div
          href="#"
          className="shadow p-6 rounded-xl"
          style={{borderRadius: '20px',width:'402px', height:'100', paddingLeft: '20px', paddingBottom: '40px', background: 'rgba(140, 140, 140, 0.1)' }}
        >
          <h1 
          className="text-6xl font-bold pl-10 mt-10 mb-2">25K+</h1>
          <p className="text-2xl mt-10 pl-10">Tahun Pengalaman</p>
        </div>

      {/* fourth card */}
        <div
          href="#"
          className="shadow p-6 rounded-xl"
          style={{borderRadius: '20px',width:'402px', height:'100', paddingLeft: '20px', paddingBottom: '40px', background: '#D9D9D9' }}
        >
          <h1 
          className="text-6xl font-bold pl-10 mt-10 mb-2">5K+</h1>
          <p className="text-2xl mt-10 pl-10">Jumlah Koleksi Properti</p>
        </div>
    </div>
  );
}