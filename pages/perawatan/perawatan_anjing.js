import Layout from '../../layouts/layout';
import Link from 'next/link';
  export default function Perawatan_Anjing(){
    return(
      <Layout>
         <div className="container">
    <h4 className="text-left font-weight-bold m-2">KUMPULAN ARTIKEL TENTANG PERAWATAN ANJING</h4>
    <br/>
    <h6><Link href="/artikel/[kode]" as="/artikel/anjinga">4 PERAWATAN HEWAN ANJING YANG BENAR</Link></h6>
    <p>Anjing sendiri menjadi hewan yang paling digemari di dunia. Jenis anjing pun bermacam-macam.</p>
    <br/>
    <h6><Link href="/artikel/[kode]" as="/artikel/anjingb">CARA MENGATASI ANJING YANG GEMETAR</Link></h6>
    <p>Anjing yang gemetar di jalanan, anjing yang gemetar yang melarikan diri, atau anjing yang gemetar yang pernah mengalami kekerasan</p>
  </div>
      </Layout>
    );
  }