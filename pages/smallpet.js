 import Layout from '../layouts/layout';
 import Link from 'next/link';
  export default function Smallpet(){
    return(
      <Layout>  
         <div className="container ">
      <h3 className="text-left font-weight-bold m-2">MAKANAN SMALL PET</h3>
      <div class="barang">
      <div class="list-produk">
                <img src="/images/pop4.jpeg" alt="NOVA RABBIT FOOD 1 KG"/>
                <p1>NOVA RABBIT FOOD </p1>
                <h6>Rp 45.000</h6>
                <Link  href="/kodebarangsmallpet/[kodebarangsmallpet]" as="/kodebarangsmallpet/sn1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET1.jpeg" alt="NOVA RABBIT MIXED BARRIES 1KG"/>
                <p1>NOVA RABBIT MIXED</p1>
                <h6>Rp 50.000</h6>
                <Link  href="/kodebarangsmallpet/[kodebarangsmallpet]" as="/kodebarangsmallpet/sn2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET2.jpeg" alt="F.TAKARI MIX 250 GR "/>
                <p1>F . TAKARI MIX </p1>
                <h6>Rp 10.000</h6>
                <Link  href="/kodebarangsmallpet/[kodebarangsmallpet]" as="/kodebarangsmallpet/sf1"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET3.jpeg" alt="F.SANKOI SMALL 2 MM 1 KG"/>
                <p1>F.SANKOI SMALL 2 MM </p1>
                <h6>Rp 70.000</h6>
                <Link  href="/kodebarangsmallpet/[kodebarangsmallpet]" as="/kodebarangsmallpet/sf2"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET2.jpeg" alt="F.TAKARI MIX 250 GR "/>
                <p1>F . TAKARI MIX </p1>
                <h6>Rp 20.000,-</h6>
                <Link  href="/kodebarangsmallpet/[kodebarangsmallpet]" as="/kodebarangsmallpet/sf3"><a class="tombol tombol-detail">Detail</a></Link>
            </div>
              </div>
              </div>
      </Layout>
    );
  }