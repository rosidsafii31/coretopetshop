import Layout from '../layouts/layout';
  export default function Anjing(){
    return(
      <Layout>
          <div className="row now-gutters ">
  <div className="col-md-2.5">
  <ul className="list-group list-group-flush p-2 pt-1">
    <li className="list-group-item bg-warning "><i className="fas fa-list mr-2"></i>KATEGORI PRODUK</li>
    <li className="list-group-item font-weight-bold  warna"><a href="/kucing"><i className="fas fa-angle-right mr-2"></i>Kucing</a></li>
    <li className="list-group-item font-weight-bold  warna"><a href="/anjing"><i className="fas fa-angle-right mr-2"></i>Anjing</a></li>
    <li className="list-group-item font-weight-bold  warna"><a href="/smallpet"><i className="fas fa-angle-right mr-2"></i>Small Pet</a></li>
    <li className="list-group-item font-weight-bold  warna"><a href="/aksesoris"><i className="fas fa-angle-right mr-2"></i>Aksesoris</a></li>
    <a className="nav-link dropdown-toggle font-weight-bold  warna" href="/perawatan/index" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i className="fas fa-angle-right mr-2"></i>
      Perawatan
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
     <li><a className="dropdown-item font-weight-bold  warna" href="/perawatan/perawatan_kucing"><a>Perawatan Kucing</a></a></li> 
     <li><a className="dropdown-item font-weight-bold  warna" href="/perawatan/perawatan_anjing"><a>Perawatan Anjing</a></a></li>
    </div>
  </ul>
  </div>   
  <div className="col-md-10">
      <h3>MAKANAN ANJING</h3>
    <div class="barang">
    <div class="list-produk">
                <img src="/images/ANJING1.png" alt=""/>
                <p1> NOURISH LIFE LAMB FOR ADULT 5.7 KG</p1>
                <h6>Rp 720.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/ANJING2.jpeg" alt=""/>
                <p1>NURTURE PRO LAMB SMALL PUPPY 1.8 KG</p1>
                <h6>Rp 255.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/ANJING3.jpeg" alt=""/>
                <p1>ACIS DOG FOOD BEEF 20 KG</p1>
                <h6>Rp 380.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/ANJING4.jpeg" alt=""/>
                <p1>NOURISH LIFE SALMON FOR ADULT 5.7 KG</p1>
                <h6>Rp 720.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/ANJING5.jpeg" alt=""/>
                <p1>NOURISH LIFE ALASKAN SALMON FORMULA CAT</p1>
                <h6>Rp 380.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/ANJING6.jpeg" alt=""/>
                <p1>ROYAL CANIN MOBILITY DOG 2 KG</p1>
                <h6>Rp 196.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            </div>
            </div>
            </div>
      </Layout>
    );
  }