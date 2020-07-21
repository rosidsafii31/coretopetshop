import Header from '../components/header'; 
import Footer from '../components/footer'; 
import Copyright from '../components/copyright'; 
import Head from 'next/head'; 
 
const Layout = (props) => (
    <div>         
    <Head>             
        <title>Coreto Petshop</title>
        <meta charSet="UTF-8" />             
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />    
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>         
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/fontawesome/css/all.css" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
        </Head>                  
    <Header />         
    <section className="section">                            
    {props.children}                
    </section>         
    <Footer />     
    <Copyright/>
    </div> ) 
 
 export default Layout; 