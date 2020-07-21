
function Menu(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">  
<div className="container">
<h3><i class="fas fa-cart-plus text-success mr-2"></i></h3>
<a className="navbar-brand font-weight-bold" href="#">CORETO PETSHOP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto mr-4">
      <li className="nav-item active">
        <a className="nav-link " href="/">Beranda</a> 
      </li>
      <li className="nav-item active">
        <a className="nav-link " href="/hubungi_kami">Hubungi Kami</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link " href="/konsultasi">Konsultasi</a>
      </li>
    </ul>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <a class="btn btn-primary ml-2" href="/daftar" role="button"><i class="fas fa-sign-out-alt mr-2"></i>Daftar</a>
    <a class="btn btn-primary ml-2" href="/masuk" role="button"><i class="fas fa-sign-in-alt mr-2"></i>Masuk</a>
  </div>
  </div>
</nav>
);
}
export default Menu;
