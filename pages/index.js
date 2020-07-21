import Layout from '../layouts/layout'; 
function Beranda(){     
  return (         
  <Layout>
    <div className="row now-gutters ">
  <div className="col-md-2.5 ">
  <ul className="list-group list-group-flush p-2 pt-1">
    <li className="list-group-item bg-warning "><i className="fas fa-list mr-2"></i>KATEGORI PRODUK</li>
    <li className="list-group-item font-weight-bold warna"><a href="/kucing"><i className="fas fa-angle-right mr-2"></i>Kucing</a></li>
    <li className="list-group-item font-weight-bold warna"><a href="/anjing"><i className="fas fa-angle-right mr-2"></i>Anjing</a></li>
    <li className="list-group-item font-weight-bold warna"><a href="/smallpet"><i className="fas fa-angle-right mr-2"></i>Small Pet</a></li>
    <li className="list-group-item font-weight-bold warna"><a href="/aksesoris"><i className="fas fa-angle-right mr-2"></i>Aksesoris</a></li>
    <a className="nav-link dropdown-toggle font-weight-bold  warna" href="/perawatan/index" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/dddd.jpeg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="/images/a2.jpeg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="/images/a3.jpeg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="/images/a4.jpeg" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <h4 class="text-center font-weight-bold m-4">PRODUK TERLARIS</h4>

    <div className="row">
      <div class="barang">
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
                <img src="/images/wis2.jpg" alt=""/>
                <p1>WISHCASH PAKAN BASAH  </p1>
                <h6>Rp 75.000</h6>
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
                <img src="/images/ANJING2.jpeg" alt=""/>
                <p1>NURTURE PRO LAMB SMALL PUPPY 1.8 KG</p1>
                <h6>Rp 255.000</h6>
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
                <img src="/images/AKSESORIS6.jpeg" alt="K.OCT KUCING C-227"/>
                <p1>K.OCT KUCING C-227</p1>
                <br/>
                <br/>
                <h6>Rp 1.000.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/AKSESORIS3.jpeg" alt="TM. BASKOM 24 CM "/>
                <p1>TM. BASKOM 24 CM</p1>
                <br/>
                <br/>
                <h6>Rp 40.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/pop4.jpeg" alt="NOVA RABBIT FOOD 1 KG"/>
                <p1>NOVA RABBIT FOOD 1 KG</p1>
                <h6>Rp 45.000</h6>
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
  </div>           
    </Layout>     
    ); 
  } 
export default Beranda;