import Layout from '../layouts/layout';
import Link from 'next/link';
  export default function Kucing(){
    return(
      <Layout>
        <div className="container">
  <h3 class="text-left font-weight-bold m-2">MAKANAN KUCING</h3>
    <div class="barang">
    <div class="list-produk">
                <img src="/images/bolt.png" alt=""/>
                <p1> BOLT CAT WITH TUNA</p1>
                <h6>Rp 380.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kb1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/royal canin persia.jpeg" alt=""/>
                <p1>ROYAL CANIN KITTEN </p1>
                <h6>Rp 247.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kr1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/pop3.jpeg" alt=""/>
                <p1>NOURISH LIFE CHICKEN </p1>
                <h6>Rp 95.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kn1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/royal.jpeg" alt=""/>
                <p1>ROYAL CANIN </p1>
                <h6>Rp 213.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kr2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/salmon.jpeg" alt=""/>
                <p1>NOURISH LIFE ALASKAN </p1>
                <h6>Rp 100.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kn2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
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
                <img src="/images/bolt2.jpeg" alt=""/>
                <p1>BOLD CAT FISH </p1>
                <h6>Rp 470.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kb2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/wis2.jpg" alt=""/>
                <p1>WISHCASH BASAH  </p1>
                <h6>Rp 75.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kw3"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/blackwod.jpeg" alt=""/>
                <p1>BLACKWOOD CAT </p1>
                <h6>Rp 513.000</h6>
                <Link  href="/kodebarangkucing/[kodebarangkucing]" as="/kodebarangkucing/kb3"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
        </div>
        </div>
      </Layout>
    );
  }