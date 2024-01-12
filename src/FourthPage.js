import poster_4 from './images/posture_4.jpg';

const FourthPage=()=>{

return(
<>

<div className='container-fluid  four'>

    
<div className='row'>
    
<div className='col-md-6 col-sm-12  bestinstructor-lg' ><h1  style={{fontFamily:'BalooBhai',fontSize:'4rem'}}>BEST </h1><h1 style={{fontFamily:'BalooBhai',fontSize:'4rem'}}>INSTRUCTOR</h1><p>lorem ipsum contains duplicate dataor text informaton<br/>lorem ipsum contains duplicate dataor text informaton <br/>lorem ipsum dummy content</p><button className=' gl-readMore'>ReadMore</button></div>
<div  className='col-md-6 col-sm-12 posterfour' ><img className='poster4pic' src={poster_4} alt='poster' style={{width:'100%',height:'800px'}}/></div>
</div>
</div>

</>


);




}
export default FourthPage;