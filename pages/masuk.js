import Layout from '../layouts/layout';
  export default function Masuk(){
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
            <h3 className="text-center title-login">Login Member</h3>
                <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="Username"/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                </div>
                
                <input type="submit" className="btn btn-block btn-custom-green" value="MASUK" />
                
                <div className="text-center forget">
                    <p className="font-weight-bold text-dark">Lupa Password ?</p>
                </div>
            </form>
        </div>
    </div>
          </div>
      </Layout>
    );
  }