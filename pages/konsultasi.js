import Layout from '../layouts/layout';
  export default function Konsultasi(){
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
  <div class="row">
   <div class="col">
     <h1>Form Konsultasi</h1>
     <p>
       Silahkan tuliskan permasalahan anda tentang hewan peliharaan.
     </p>
   </div>
   <div class="col">
     <form method="post" action="#">
       <div class="form-group">
         <label for="">Nama Anda:</label>
         <input type="text" class="form-control" name="nama" placeholder="Masukkan Nama"/>
       </div>
       <div class="form-group">
         <label for="">E-mail Anda:</label>
         <input type="email" class="form-control" name="email" placeholder="Masukkan Email"/>
       </div>
       <div class="form-group">
         <label for="">permasalahan Anda:</label>
         <textarea name="pesan" class="form-control" cols="30" rows="7"></textarea>
       </div>
       <input class="btn btn-primary" type="submit" value="POST"/>
     </form>
   </div>
 </div>
  </div>
  </div>
      </Layout>
    );
  }