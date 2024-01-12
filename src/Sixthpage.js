import Medalimage from './images/emblam_logo.png'


const SixthPage=()=>{

return(
<>
<div className='container-fluid sixth'>
<div className='container'>
<div className='row'>
<div className='col-md-12 col-sm-12'>
<h1 className='sixth-Pricing'>Pricing</h1>
</div>
</div>

<div className='row'>
<div className='col-md-12 col-sm-12'>
<p className="sixthptag">Lorem Ipsum is simply dummy text of the printing and typesetting industry<br/>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>loremipsum contains dummytext inside</p>
</div>
</div>

<div className='threemedaldiv'>
    <div className='row'>
<div className= 'col-md-4 col-sm-12 '>
    <div className='threemedals'>
<h3 className='nameclassanddolor onlyclass'>NEWBIE CLASS</h3>
<h3 className='nameclassanddolor'>$00.00</h3>
<img src={Medalimage} alt='medalpic'/>
<p>lorem ipsum contains dummy text content matter</p>
<button className='registerbtun'>REGISTER NOW</button>
</div >
</div>

<div className= 'col-md-4 col-sm-12 '>
<div className='threemedals'><h3 className='nameclassanddolor onlyclass'>ADVANCED CLASS</h3>
<h3 className='nameclassanddolor'>$00.00</h3>
<img src={Medalimage} alt='medalpic'/>
<p>lorem ipsum contains dummy text content matter</p>
<button className='registerbtun'>REGISTER NOW</button>
</div >
</div>

<div className= 'col-md-4 col-sm-12 '>
<div className='threemedals'>
<h3 className='nameclassanddolor onlyclass'>EXPERT CLASS</h3>
<h3 className='nameclassanddolor'>$00.00</h3>
<img src={Medalimage} alt='medalpic'/>
<p>lorem ipsum contains dummy text content matter</p>
<button className='registerbtun'>REGISTER NOW</button>
</div >
</div>


</div>

</div >








</div>


</div>



</>


);


}
export default SixthPage