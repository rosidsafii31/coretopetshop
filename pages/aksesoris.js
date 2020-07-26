import Layout from '../layouts/layout';
import Link from 'next/link';
  export default function Aksesoris(){
    return(
      <Layout>
          <div className="container">
            <h3 className="text-left font-weight-bold m-2">AKSESORIS</h3>
      <div className="barang">
      <div className="list-produk">
                <img src="/images/AKSESORIS1.jpeg" alt="A.BED KOTAK"/>
                <p1> A.BED KOTAK</p1>
                <h6>Rp 400.000</h6>
                <Link  href="/kodebarangaksesoris/[kodebarangaksesoris]" as="/kodebarangaksesoris/ak1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/AKSESORIS2.jpeg" alt="A.BEDANIMAL"/>
                <p1>A.BED ANIMAL</p1>
                <h6>Rp 400.000</h6>
                <Link  href="/kodebarangaksesoris/[kodebarangaksesoris]" as="/kodebarangaksesoris/ak2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/AKSESORIS3.jpeg" alt="TM. BASKOM 24 CM "/>
                <p1>TM. BASKOM </p1>
                <h6>Rp 40.000</h6>
                <Link  href="/kodebarangaksesoris/[kodebarangaksesoris]" as="/kodebarangaksesoris/ak3"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/AKSESORIS4.jpeg" alt="TM.BO PLASTIC SLOW BOWL"/>
                <p1>TM.BO PLASTIC BOWL</p1>
                <h6>Rp 35.000</h6>
                <Link  href="/kodebarangaksesoris/[kodebarangaksesoris]" as="/kodebarangaksesoris/ak4"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/AKSESORIS6.jpeg" alt="K.OCT KUCING C-227"/>
                <p1>K.OCT KUCING C-227</p1>
                <h6>Rp 1.000.000</h6>
                <Link  href="/kodebarangaksesoris/[kodebarangaksesoris]" as="/kodebarangaksesoris/ak5"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            </div>
            </div>
      </Layout>

    );
  }