import flora_frame from'./images/right_floral3.png';
import Newbiepic from './images/posture_1.png';
import Advancedpic from './images/posture_2.png';
import Expert from './images/posture_3.png'


const  Secondpage=()=>{

return(
<div className='container-fluid gl-secondpage'>

<div className='container-fluid'>

<div className='row'>
<div className='col-md-8 col-sm-12 gl-chooseclass'>
 <h1>CHOOSE CLASS</h1>  
</div>
<div className='col-md-4 col-sm-12 gl-flora-borderpic'><img src={flora_frame} alt='frame' style={{width:'80%',height:'200px'}}/></div>
<div  className='second-pagemiddletxt'>
<div className='row'>
<div className='col-md-12 col-sm-12' >
    <div className='gl-secondpagepg'><p>In publishing and graphic design, Lorem ipsum is a placeholder<br/> text commonly used to demonstratetext commonly used to demonstrate<br/>In publishing and graphic design, Lorem ipsum  </p></div></div>

<div className='container'>
<div className='row  gl-threepics'>
<div className='col-md-4 col-sm-12'><img style={{width:'100%'}} src={Newbiepic}alt='threeimages'/><h5 className='gl-heaadingtag'>NEWBIE CLASS</h5><p className='gl-ptag'> lorem ipsum in publishing and graphic<br/>commonly used to demonstrate</p></div>
<div className='col-md-4 col-sm-12'><img style={{width:'100%'}} src={Advancedpic} alt='threeimages'/> <h5 className='gl-heaadingtag'>ADVANCED CLASS</h5><p className='gl-ptag'> lorem ipsum in publishing and graphic <br/>commonly used to demonstrate</p></div>
<div className='col-md-4 col-sm-12'><img style={{width:'100%'}} src={Expert} alt='threeimages'/><h5 className='gl-heaadingtag'>EXPERT CLASS</h5><p className='gl-ptag'> lorem ipsum in publishing and graphic<br/>commonly used to demonstrate</p></div>
</div>
</div>

</div>

</div>



</div>

</div>

</div>


);



}
export default Secondpage;
