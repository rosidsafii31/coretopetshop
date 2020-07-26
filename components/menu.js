import Link from 'next/link';
function Menu(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">  
<div className="container">
<h3><i className="fas fa-cart-plus text-success mr-2"></i></h3>
<Link href="/"><a className="navbar-brand font-weight-bold"><a>CORETO PETSHOP</a></a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto mr-4">
      <li className="nav-item active">
        <Link href="/"><a className="nav-link font-weight-bold "><a>Beranda</a></a></Link>
      </li>
      <li className="nav-item active">
      <Link href="/kucing"><a className="nav-link font-weight-bold " ><a>Kucing</a></a></Link>
      </li>
      <li className="nav-item active">
      <Link  href="/anjing"><a className="nav-link font-weight-bold "><a>Anjing</a></a></Link>
      </li>
      <li className="nav-item active">
      <Link  href="/smallpet"><a class="nav-link font-weight-bold"><a>Small Pet</a></a></Link>
      </li>
      <li className="nav-item active">
      <Link href="/aksesoris"><a className="nav-link font-weight-bold " ><a>Aksesoris</a></a></Link>
      </li>
      <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle font-weight-bold active  flex-fill" href="/perawatan/index" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Perawatan
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
     <li><Link href="/perawatan/perawatan_kucing"><a className="dropdown-item font-weight-bold  flex-fill" ><a>Perawatan Kucing</a></a></Link></li> 
     <li><Link href="/perawatan/perawatan_anjing"><a className="dropdown-item font-weight-bold  flex-fill" ><a>Perawatan Anjing</a></a></Link></li>
    </div>
    </li>
    </ul>
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle ml-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Akun
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link  href="/daftar"><a className="dropdown-item"><i class="fas fa-sign-out-alt mr-2"></i><a>Daftar</a></a></Link>
    <Link  href="/masuk"><a className="dropdown-item"><i class="fas fa-sign-in-alt mr-2"></i><a>Masuk</a></a></Link>
  </div>
</div>
  </div>
  </div>
</nav>
);
}
export default Menu;
