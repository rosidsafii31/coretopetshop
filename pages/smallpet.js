 import Layout from '../layouts/layout';
  export default function Smallpet(){
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
      <h3>MAKANAN SMALL PET</h3>
      <div class="barang">
      <div class="list-produk">
                <img src="/images/pop4.jpeg" alt="NOVA RABBIT FOOD 1 KG"/>
                <p1>NOVA RABBIT FOOD 1 KG</p1>
                <h6>Rp 45.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET1.jpeg" alt="NOVA RABBIT MIXED BARRIES 1KG"/>
                <p1>NOVA RABBIT MIXED BARRIES 1KG</p1>
                <h6>Rp 50.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET2.jpeg" alt="F.TAKARI MIX 250 GR "/>
                <p1>F . TAKARI MIX 250 GRAM</p1>
                <h6>Rp 10.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET3.jpeg" alt="F.SANKOI SMALL 2 MM 1 KG"/>
                <p1>F.SANKOI SMALL 2 MM 1 KG</p1>
                <h6>Rp 70.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/SMALLPET2.jpeg" alt="F.TAKARI MIX 250 GR "/>
                <p1>F . TAKARI MIX 500 GRAM</p1>
                <h6>Rp 20.000,-</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
              </div>
              </div>
              </div>
      </Layout>
    );
  }