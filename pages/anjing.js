import Layout from '../layouts/layout';
import Link from 'next/link';
  export default function Anjing(){
    return(
      <Layout>
        <div className="container">
      <h3 className="text-left font-weight-bold m-2">MAKANAN ANJING</h3>
    <div className="barang">
    <div className="list-produk">
                <img src="/images/ANJING1.png" alt=""/>
                <p1> NOURISH LIFE LAMB </p1>
                <h6>Rp 720.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/an1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/ANJING2.jpeg" alt=""/>
                <p1>NURTURE PRO LAMB </p1>
                <h6>Rp 255.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/an2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/ANJING3.jpeg" alt=""/>
                <p1>ACIS DOG FOOD </p1>
                <h6>Rp 380.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/aa1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/ANJING5.jpeg" alt=""/>
                <p1>NOURISH LIFE ALASKAN </p1>
                <h6>Rp 380.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/an3"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div className="list-produk">
                <img src="/images/ANJING6.jpeg" alt=""/>
                <p1>ROYAL CANIN MOBILITY </p1>
                <h6>Rp 196.000</h6>
                <Link  href="/kodebaranganjing/[kodebaranganjing]" as="/kodebaranganjing/ar1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            </div>
            </div>
      </Layout>
    );
  }