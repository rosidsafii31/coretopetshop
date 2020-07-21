import Layout from '../../layouts/layout';
import Link from 'next/link';
  export default function Perawatan_Anjing(){
    return(
      <Layout>
         <div className="row now-gutters ">
  <div className="col-md-2.5 ">
  <ul className="list-group list-group-flush p-2 pt-1">
    <li className="list-group-item bg-warning "><i className="fas fa-list mr-2"></i>KATEGORI PRODUK</li>
    <li className="list-group-item font-weight-bold warna"><a href="/kucing"><i className="fas fa-angle-right mr-2"></i>Kucing</a></li>
    <li className="list-group-item font-weight-bold warna"><a href="/anjing"><i className="fas fa-angle-right mr-2"></i>Anjing</a></li>
    <li className="list-group-item font-weight-bold warna"><a href="/smallpet"><i className="fas fa-angle-right mr-2"></i>Small Pet</a></li>
    <li className="list-group-item font-weight-bold warna"><a href="/aksesoris"><i className="fas fa-angle-right mr-2"></i>Aksesoris</a></li>
    <a className="nav-link dropdown-toggle font-weight-bold  warna"href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i className="fas fa-angle-right mr-2"></i>
      Perawatan
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
     <li><a className="dropdown-item font-weight-bold warna" href="/perawatan/perawatan_kucing"><a>Perawatan Kucing</a></a></li> 
     <li><a className="dropdown-item font-weight-bold warna" href="/perawatan/perawatan_anjing"><a>Perawatan Anjing</a></a></li>
    </div>
  </ul>
  </div>   
  <div className="col-md-10">
    <h4>KUMPULAN ARTIKEL TENTANG PERAWATAN ANJING</h4>
    <br/>
    <h6><Link href="/artikel/[kode]" as="/artikel/anjinga">4 PERAWATAN HEWAN ANJING YANG BENAR</Link></h6>
    <p>Anjing sendiri menjadi hewan yang paling digemari di dunia. Jenis anjing pun bermacam-macam.</p>
    <br/>
    <h6><Link href="/artikel/[kode]" as="/artikel/anjingb"> CARA MENGATASI ANJING YANG GEMETAR</Link></h6>
    <p>Anjing yang gemetar di jalanan, anjing yang gemetar yang melarikan diri, atau anjing yang gemetar yang pernah mengalami kekerasan</p>
   
  </div>
  </div>
      </Layout>
    );
  }