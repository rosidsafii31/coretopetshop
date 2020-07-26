import Layout from '../layouts/layout';
  export default function Daftar(){
    return(
      <Layout>
         <div className="container">
              <br></br>
              <div className=" form-login">
        <div className="outter-form-login">
        <div className="logo-login">
            <em className="glyphicon glyphicon-user"></em>
        </div>
            <form action="" className="inner-login" method="post">
            <h3 className="text-center title-login">Daftar  Member</h3>
                <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="Alamat" placeholder="Alamat"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="Kota" placeholder="Kota"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="Negara" placeholder="Negara"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="Kode Pos" placeholder="KodePos"/>
                </div>
                
                <input type="submit" className="btn btn-block btn-custom-green" value="DAFTAR" />
            </form>
        </div>
    </div>
          </div>
      </Layout>
    );
  }