import Header from "./components/header";
import tailwindConfig from "../../tailwind.config";
import Footer from "./components/footer";
import CardPage from "./components/card";
import CardProperty from "./components/cardProperty";
import Maps from "./components/maps";
import Review from "./components/review";
tailwindConfig;

export default function Home() {
  return (
    <div>
      <div class="fixed sticky top-0 z-50">
        <Header/>
      </div>
      <div class="relative">
        <img src="/banner.png" class="banner" />
        <span
          class="absolute inset-0 flex items-center font-bold justify-center mb-40 text-6xl z-10 text-white bottom-20"
          style={{ textAlign: "center" }}
        >
          Temukan Keserasian
          <br /> Di Hunian Impian Anda
        </span>
        <span
          class=" pb-28 absolute inset-0 flex font-light items-center justify-center z-10 text-white top-20"
          style={{ textAlign: "center" }}
        >
          Serasi Hunian hadir untuk membantu Anda menemukan rumah impian Anda
          dengan mudah.
          <br /> Temukan keselarasan dan kenyamanan di setiap langkah pencarian
          Anda.
        </span>
        <div>
          <input
            class="absolute flex bottom-1 top-20 mt-80 left-14 mb-60 ml-85 z-10"
            type="text"
            name="#"
            placeholder="Cari lokasi, keyword, area yang ingin kamu huni"
            style={{
              marginLeft: "300px",
              width: "800px",
              height: "60px",
              paddingLeft: "30px",
              borderRadius: "30px",
              background: "#16161A",
              color: "grey",
            }}
          />
          <button
            type="button"
            style={{
              marginLeft: "1036px",
              marginTop: "326px",
              textAlign: "center",
            }}
            class="absolute flex bg-red-600 text-white bottom-1 top-20 mt-80  mb-60  pl-5 z-10 items-center justify-center w-28 h-12 rounded-3xl"
          >
            Cari
            <img
              src="/search.png"
              class="search"
              style={{ marginRight: "52px" }}
            />
          </button>
        </div>
      </div>
      <div class="mt-20 items-center justify-center flex">
        <CardPage />
      </div>
      <div class="text-white flex font-medium font-3xl">
          <h1 class="advisor" >Advisor Properti <br></br>Tepercaya Anda</h1>
          <a class="tl1">Sebuah agen properti yang terdepan yang menawarkan<br></br> pengalaman yang mulus dan mendalam dalam mencari rumah<br></br> impian Anda di pusat kota.</a>
        </div>
    <div>
      <CardProperty/>
      <img src="/info.png" class="info"></img>
    </div>
    <div class="mt-10 content-stretch">
      <Maps/>
    </div>
    <div>
      <h1 className="text-white flex justify-center font-light" style={{fontSize:'30px', marginTop:'100px'}}>Jangan percaya kami, percayalah pada suara mereka</h1>
      <h2 className="text-white mt-5 flex justify-center font-thin text-center" style={{fontSize:'20px'}}>Temukan cerita kebahagiaan dan pemenuhan hati dari klien-klien berharga kami saat mereka memulai perjalanan<br></br> menuju rumah dan investasi primer mereka</h2>
    </div>
    <div className="container text-white">
      <Review/>
    </div>
    </div>
    
  );
}
