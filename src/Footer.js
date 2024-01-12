
import facebook from './images/facebook_icon.png';
import whatsapp from './images/whatsapp.png';
import twitter from './images/twitter_icon.png';
import instagram from './images/instagram.png';

const Footer=()=>{

return(

<>
<div className='container-fluid footer'>
<div className='row'>

<div className='col-md-6 col-sm-12'><h2>Title Here</h2><p>In publishing and graphic design, Lorem ipsum is 
text commonly used to demonstrate the visual them </p></div>

<div className='col-md-2 col-sm-12 midlitag'>

<div>
<h2>ABOUT</h2>
    <ul>
    <li>History</li>
    <li>Our Team</li>
    <li>Brand Guidences</li>
    <li>Terms&Conditions</li>
<li>Privacy Policy</li>
    </ul>
    </div>
    </div>

    <div className='col-md-2 col-sm-12 midlitag'>
<span>
<h2>Services</h2>
<ul>
<li>Home to Order</li>
<li>Our Product</li>
<li>order status</li>
<li>Promo</li>
<li>Payment Method</li>
</ul>

</span>
</div>

<div className='col-md-2  col-sm-12  endinglist'>
  
<h2>Follow</h2>
<ul>
<li><img src={facebook} alt='facebooklogo'/>&nbsp;facebook</li>
<li><img src={twitter} alt='twitter'/> &nbsp;twitter</li>
<li><img src={instagram} alt='instagram'/>&nbsp;instagram</li>
<li><img src={whatsapp} alt='whatsapp'/>&nbsp;whatsapp</li>


</ul>
</div>
</div>
</div>



</>


);

}    
export default Footer; 