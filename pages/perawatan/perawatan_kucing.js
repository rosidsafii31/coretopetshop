import Layout from '../../layouts/layout';
import Link from 'next/link';
  export default function Perawatan_kucing(){
    return(
      <Layout>
        <div className="container">
    <h4 className="text-left font-weight-bold m-2">KUMPULAN ARTIKEL TENTANG PERAWATAN KUCING</h4>
    <br/>
     <h6><Link href="/artikel/[kode]" as="/artikel/kucinga">CARA MERAWAT KUCING PELIHARAAN</Link></h6>
     <p>Cara merawat atau memelihara kucing sangat perlu diketahui jika kita mempunyai hewan peliharaan kucing. </p>
     <br/>
     <h6><Link href="/artikel/[kode]" as="/artikel/kucingb">CARA MERAWAT ANAK KUCING SAAT BARU PULANG</Link></h6>
     <p>Pastikan rumahmu setenang mungkin, ketika pertama kali membawanya pulang. </p>
     </div>
      </Layout>
    );
  }