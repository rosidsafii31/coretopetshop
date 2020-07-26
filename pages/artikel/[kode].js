import dummyData from '../../dataset/dummy.json'; 
import Layout from '../../layouts/layout';

const Artikel =(props)=> {
    return(
        <Layout>
        <div className="container">
        <h5>{props.judul}</h5>
        <p>{props.isi}</p>
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