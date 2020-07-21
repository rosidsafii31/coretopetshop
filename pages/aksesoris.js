import Layout from '../layouts/layout';
  export default function Aksesoris(){
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
     <li><a className="dropdown-item font-weight-bold  warna" href="/perawatan/perawatan_kucing" ><a>Perawatan Kucing</a></a></li> 
     <li><a className="dropdown-item font-weight-bold  warna" href="/perawatan/perawatan_anjing" ><a>Perawatan Anjing</a></a></li>
    </div>
  </ul>
  </div>   
  <div className="col-md-10">
            <h3>AKSESORIS</h3>
      <div class="barang">
      <div class="list-produk">
                <img src="/images/AKSESORIS1.jpeg" alt="A.BED KOTAK"/>
                <p1> A.BED KOTAK</p1>
                <h6>Rp 400.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/AKSESORIS2.jpeg" alt="A.BEDANIMAL"/>
                <p1>A.BEDANIMAL</p1>
                <h6>Rp 400.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/AKSESORIS3.jpeg" alt="TM. BASKOM 24 CM "/>
                <p1>TM. BASKOM 24 CM</p1>
                <h6>Rp 40.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/AKSESORIS4.jpeg" alt="TM.BO PLASTIC SLOW BOWL"/>
                <p1>TM.BO PLASTIC BOWL</p1>
                <h6>Rp 35.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            <div class="list-produk">
                <img src="/images/AKSESORIS6.jpeg" alt="K.OCT KUCING C-227"/>
                <p1>K.OCT KUCING C-227</p1>
                <h6>Rp 1.000.000</h6>
                <a class="tombol tombol-detail" href="#">Detail</a> 
                <a class="tombol tombol-beli" href="#">Beli</a>
            </div>
            </div>
            </div>
            </div>
      </Layout>

    );
  }