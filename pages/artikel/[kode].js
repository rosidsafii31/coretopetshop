import dummyData from '../../dataset/dummy.json'; 
import Layout from '../../layouts/layout';

const Artikel =(props)=> {
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
        <h5>{props.judul}</h5>
        <p>{props.isi}</p>
    </div>
    </div>
    </Layout>
    );
}

export async function getStaticProps(context){
    let kode = context.params.kode;
    let data = dummyData.find(x => x.id == kode);

    let {judul, isi} = data;

    return{
        props : {
            judul, isi
        }
    }
}

export async function getStaticPaths(){
    return{
        paths : dummyData.map(data =>(
            {params : {kode : data.id}}
        )),
        fallback: false
    }
}

export default Artikel;