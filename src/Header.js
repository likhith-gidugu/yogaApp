import Logo from './images/logo.png';
 

const Navigation=()=>{

return(
<div className='container-fluid  navigation-bg'>
<nav className='navbar navbar-expand-lg '>
 <a href='home' className='navbar-brand logo-bg '><img src={Logo} alt='logo'/></a>
 <button className='navbar-toggler' data-bs-target='#navigation' data-bs-toggle='collapse'><span className='navbar-toggler-icon'></span> </button>
 <div className='collapse navbar-collapse' id='navigation'>

<ul className='navbar-nav gl-nav'>
<li className='nav-item'> <a href='Home' className='nav-link'>HOME</a></li>
<li className='nav-item'> <a href='home' className='nav-link'>ABOUTUS</a></li>
<li className='nav-item '> <a href='home' className='nav-link'>SERVICES</a></li>
<li className='nav-item'> <a href='home' className='nav-link'>CONTACTUS</a></li>

</ul>

 </div>
    
</nav>

</div>


);

} 
export default Navigation ;