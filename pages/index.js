import Layout from '../layouts/layout'; 
import Link from 'next/link';
function Beranda(){     
  return (         
  <Layout>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/dddd.jpeg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/images/a2.jpeg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/images/a3.jpeg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/images/a4.jpeg" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    <div className="container">
    <h4 class="text-center font-weight-bold m-4">PRODUK PALING LARIS</h4>

    <div className="row">
      <div className="barang">
      <div class="list-produk">
                <img src="/images/wis4.png" alt=""/>
                <p1>WISHCASH ADULT  </p1>
                <h6>Rp 250.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kw1"><a class="tombol tombol-detail">Detail</a></Link>
      </div>   
      <div class="list-produk">
                <img src="/images/wis5.png" alt=""/>
                <p1>WISHCASH TUNA </p1>
                <h6>Rp 50.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kw2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/wis2.jpg" alt=""/>
                <p1>WISHCASH BASAH  </p1>
                <h6>Rp 75.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kw3"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/royal.jpeg" alt=""/>
                <p1>ROYAL CANIN </p1>
                <h6>Rp 213.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kr2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/ANJING2.jpeg" alt=""/>
                <p1>NURTURE PRO LAMB </p1>
                <h6>Rp 255.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/an2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/ANJING1.png" alt=""/>
                <p1> NOURISH LIFE LAMB </p1>
                <h6>Rp 720.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/an1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/AKSESORIS6.jpeg" alt="K.OCT KUCING C-227"/>
                <p1>K.OCT KUCING C-227</p1>
                <h6>Rp 1.000.000</h6>
                <Link  href="/kodebarangaksesoris/[kodebarangaksesoris]" as="/kodebarangaksesoris/ak5"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/AKSESORIS3.jpeg" alt="TM. BASKOM 24 CM "/>
                <p1>TM. BASKOM </p1>
                <h6>Rp 40.000</h6>
                <Link  href="/kodebarangaksesoris/[kodebarangaksesoris]" as="/kodebarangaksesoris/ak3"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/pop4.jpeg" alt="NOVA RABBIT FOOD 1 KG"/>
                <p1>NOVA RABBIT FOOD </p1>
                <h6>Rp 45.000</h6>
                <Link  href="/kodebarangsmallpet/[kodebarangsmallpet]" as="/kodebarangsmallpet/sn1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/ANJING6.jpeg" alt=""/>
                <p1>ROYAL CANIN MOBILITY </p1>
                <h6>Rp 196.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/ar1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
      </div>
      </div>
    </div>           
    </Layout>     
    ); 
  } 
export default Beranda;