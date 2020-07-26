import kodbarang from '../../dataset/barangaksesoris.json'; 
import Layout from '../../layouts/layout';
import Link from 'next/link';

const Barang =(props)=> {
    return(
        <Layout>
          <div className="container">
          <div className="outter-form-login">
            <div className="row">
              <div className="col-md-7">
                <center>
              <img class="img-thumbnail" src={props.gambar}/>
              </center>
              </div>
              <div className="col-md-5">
        <table className="table table-borderless">
            <tr>
                <th>Nama Produk : </th>
                <td>{props.namaproduk}</td>
            </tr>
            <tr>
                <th>Berat Produk : </th>
                <td>{props.ukuranproduk}</td>
            </tr>
            <tr>
                <th>Stock : </th>
                <td>{props.stock}</td>
            </tr>
        </table>
        <button type="button" class="btn btn-primary btn-lg active" data-toggle="modal" data-target="#exampleModal">
            BELI
        </button>
        <Link href="/aksesoris"><a class="btn btn-primary btn-lg active ml-2 " role="button" aria-pressed="true"><a>KEMBALI</a></a></Link>
        </div>
        </div>
        </div>
        </div>

        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Konfirmasi Pembayaran</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <table>
          <tr>            
            <th><label className="mr-2">Jasa Pengiriman : </label>
            </th>
            <select name="jasa">
                <option value="islam">JNE</option>
                <option value="kristen">JNT Express</option>
            </select>
            </tr>
            <tr>
            <th><label className="mr-2">Pembayaran : </label></th>
            <select name="pembayaran">
                <option value="islam">Indomaret</option>
                <option value="kristen">Bank Mandiri</option>
                <option value="kristen">Bank BCA</option>
                <option value="kristen">Bank BRI</option>
                <option value="kristen">Gopay</option>
            </select>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Konfirmasi
  </button>
  <div class="collapse" id="collapseExample">
  <div class="card card-body font-weight-bold">
   Terima Kasih Telah Berbelanja di Coreto Petshop , Barang Anda Akan Segera Dikirim
  </div>
</div>
      </div>
    </div>
  </div>
</div>
    </Layout>
    );
}

export async function getStaticProps(context){
    let kodebarangaksesoris = context.params.kodebarangaksesoris;
    let data = kodbarang.find(x => x.id == kodebarangaksesoris);

    let {namaproduk, ukuranproduk, stock, gambar} = data;

    return{
        props : {
            namaproduk, ukuranproduk, stock, gambar 
        }
    }
}

export async function getStaticPaths(){
    return{
        paths : kodbarang.map(data =>(
            {params : {kodebarangaksesoris: data.id}}
        )),
        fallback: false
    }
}

export default Barang;