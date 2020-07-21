import Layout from '../layouts/layout';
  export default function Kucing(){
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
  <h4 class="text-left font-weight-bold m-2">MAKANAN KUCING</h4>
    <div class="barang">
    <div class="list-produk">
                <img src="/images/bolt.png" alt=""/>
                <p1> BOLT CAT WITH TUNA 20 KG</p1>
                <h6>Rp 380.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/royal canin persia.jpeg" alt=""/>
                <p1>ROYAL CANIN KITTEN PERSIAN 2 KG</p1>
                <h6>Rp 247.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/pop3.jpeg" alt=""/>
                <p1>NOURISH LIFE CHICKEN CAT</p1>
                <h6>Rp 95.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/royal.jpeg" alt=""/>
                <p1>ROYAL CANIN 2 KG MAINECOON ADULT</p1>
                <h6>Rp 213.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/salmon.jpeg" alt=""/>
                <p1>NOURISH LIFE ALASKAN SALMON FORMULA CAT</p1>
                <h6>Rp 100.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/wis1.jpg" alt=""/>
                <p1>WISHCASH ADULT CHICKEN 2,3 KG</p1>
                <h6>Rp 250.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/wis3.jpg" alt=""/>
                <p1>WISHCASH TUNA 480 GRAM</p1>
                <h6>Rp 50.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/bolt1.jpg" alt=""/>
                <p1>BOLD CAT FISH AND TUNA 8 KG</p1>
                <h6>Rp 470.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/wis2.jpg" alt=""/>
                <p1>WISHCASH PAKAN BASAH  </p1>
                <h6>Rp 75.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/blackwod.jpeg" alt=""/>
                <p1>BLACKWOOD CAT CHICKEN & RICE 6KG</p1>
                <h6>Rp 513.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
        </div>
        </div>
        </div>
      </Layout>
    );
  }