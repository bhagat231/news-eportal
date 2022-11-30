import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Data/Product'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
    var soul=Product.filter((q)=>q.cat==6)
    var abc=Product.filter((q)=>q.cat==5)
    var trend=Product.filter((q)=>q.cat==11)
    var one=Product.filter((q)=>q.cat==8)
    var two=Product.filter((q)=>q.cat==5)
    var three=Product.filter((q)=>q.cat==7)
    var four=Product.filter((q)=>q.cat==3)
    var five=Product.filter((q)=>q.cat==9)
    var six=Product.filter((q)=>q.cat==4)
    var seven=Product.filter((q)=>q.cat==11)
    var eight=Product.filter((q)=>q.cat==1)
    var nine=Product.filter((q)=>q.cat==2)
    var ten=Product.filter((q)=>q.cat==10)
    var eleven=Product.filter((q)=>q.cat==12)
    var twelve=Product.filter((q)=>q.cat==13)
    var thirteen=Product.filter((q)=>q.cat==14)
  return (
  <>
  <div className='container py-3'>
    <div className='row'>
    <img src={require('../assests/img/3.gif')} /> 
    </div>
  </div>
  
  <section className='block2 py-2'>
    <div className='container'>
        <div className='row my-5 gx-2'>
        {soul.slice(0,3).map((d)=>(

           <div className='col-lg-12 py-2 '>
            <div className='row'>
           
           <div class="shadow-lg p-3 mb-5 bg-body rounded">
  <div className="card-body text-center py-3 card ">
    <h5 className="card-title fs-1 py-3 kbc"><strong>{d.title}</strong></h5>
   <Link to={`/details/${d.id}`}><img src={d.img} class="img-fluid w-100" alt="Responsive image"/></Link>
    <p className="card-text py-2 text-center"><h5><Link className='link-dark shank' to={`/details/${d.id}`}>{d.desc}</Link></h5></p>
  </div>
</div>
</div>
</div>



            ))}
        </div>
    </div>
  </section>
  
  {/* jalbayu page */}

  <section className='block3 py-2'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
        <h5 className='who'>कोप–२७ः जलवायु सङ्कटसँग जुध्न व्यावहारिक बाचाको पर्खाइ</h5>
        {abc.slice(0,1).map((e)=>(
          <>
          <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <Link to={`/details/${e.id}`}><img className='w-100' src={e.img}/></Link>
        <h5 className='py-2 jkl'><Link className='link-dark shank' to={`/details/${e.id}`}>{e.title}</Link></h5>
        </div>
        </>

        ))}

        </div>
        <div className='col-lg-4'>
        <h5 className='whom mx-4'>भर्खरै</h5>
          <ul>
            {abc.slice(0,4).map((f)=>(

           
            <li>
              <div class="shadow-sm  bg-body rounded">
       <div className="card mb-1" >
  <div className="row g-0">
    <div className="col-md-4">
     <Link to={`/details/${f.id}`}> <img src={f.img} className="img-fluid rounded-start ggg w-100" alt="..." /></Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title "><Link className='link-dark shank' to={`/details/${f.id}`}>{f.title}</Link></h5>
      </div>
      </div>
    </div>
  </div>
</div>


            </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </section>
  {/* <trending></trending> */}

  <section>
   <div className='container'>
    <div className='sus py-2'>
</div>
<h5 className='whom   text-center '>ट्रेन्डिङ</h5>
      <div className='card-body py-3 '>
        <div className='row '>
         <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={40}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
       >{trend.map((d)=>(
         <SwiperSlide> 
      <div className="shadow-lg bg -body rounded" style={{width: '23rem'}}>
 <Link to={`/details/${d.id}`}><img  src={d.img} className="card-img-top kki w-100 " alt="..." /></Link>
  <div className="card-body py-4 shadow p-3 mb-5 bg-body rounded">
    <h5 className="card-title shank"><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.title}</Link></h5>
    <p className="card-text"><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.head}</Link></p>
  </div>
</div>

          </SwiperSlide>
             ))}
         </Swiper>
         </div>
   
    </div>
    </div>
   </section>
   
   {/* mukhiya samachar */}
   <section>
    
    <div className='container'>
    <div className='sus py-2'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>मुख्य समाचार</h5>
{one. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
      <div className='row'>
        <div className='col-lg-7'>
          {one.slice(0,1).map((e)=>(
            <div className='card box shadow-lg bg -body rounded'>
            <Link to={`/details/${e.id}`}><img className='w-100' src={e.img}/></Link>
              <h4 className='py-2'><Link className='link-dark text-decoration-none ' to={`/details/${e.id}`}>{e.title}</Link></h4>
              <p><Link className='link-dark text-decoration-none' to={`/details/${e.id}`}>{e.desc}</Link></p>
              
              </div>
             ))}
         

        </div>
        <div className='col-lg-5'>
            {one.slice(1,4).map((f)=>(
              <div className=' one d'>
              <div className='card shadow-lg bg -body rounded my-1'>
                <div className='d-flex py-3  gap-2'>

         <Link to={`/details/${f.id}`}><img className='img-thumbnail kkw' src={f.img}/></Link>
            <div>
            <h4><Link className='link-dark text-decoration-none' to={`/details/${f.id}`}>{f.title}</Link></h4>
            <p><Link className='link-dark text-decoration-none' to={`/details/${f.id}`}>{f.head}</Link></p>
            <p className='text-danger pb-2'><Link className='link-danger' to={`/details/${f.id}`}>{f.subt}</Link></p>
            </div>
            </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
   </section>

   {/* bichar */}
 
<section>
  <div className='container py-5 '>
    <div className='row'>
      {two.slice(5,6).map((d)=>(
      <div className='col-lg-8'>
             <div className='sus nmb py-2'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>बिचार</h5>
{two. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
        <div className='card shadow p-3 mb-5 bg-body rounded'>
        <Link to={`/details/${d.id}`}><img className='w-100' src={d.img}/></Link> 
          <h2 className='py-2 px-2'><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.title}</Link></h2>
          <p className='px-2'><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.head}</Link></p>
        </div>
        <div className='row'>
        {two.slice(6,7).map((e)=>(
          <div className='col-lg-6'>
          <div className='card shadow p-3 mb-5 bg-body rounded'> 
          <Link to={`/details/${e.id}`}><img className='w-100' src={e.img}/></Link>
            <h5 className='py-2'><Link className='link-dark text-decoration-none' to={`/details/${e.id}`}>{e.title}</Link></h5>
            <p><Link className='link-dark text-decoration-none' to={`/details/${e.id}`}>{e.head}</Link></p>
          </div>
        </div>
        ))}

        {two.slice(7,8).map((f)=>(
        <div className='col-lg-6'>
          <div className='card shadow p-3 mb-5 bg-body rounded'>
           <Link to={`/details/${f.id}`}> <img className='w-100' src={f.img}/></Link>
            <h5 className='py-2'><Link className='link-dark text-decoration-none ggg' to={`/details/${f.id}`}>{f.title}</Link></h5>
            <p>{f.head}</p>
          </div>
        </div>
        ))}
        </div>
      </div>
      ))}
      <div className='col-lg-4 pb-5'>
      <a _ngcontent-serverapp-c47 target="_blank" style={{width: '85%'}} href="https://youtu.be/ffyyHmKNoE8"><img _ngcontent-serverapp-c47 className="#" style={{width: '75%'}} alt="#" title="#" src="https://api.chakrapath.com/Content/AdImages/20212126435_madanbhandari.gif" /></a>
      <div>
        <img className='w-75 py-2' src='https://api.chakrapath.com/Content/AdImages/20223904065_advert-yeti.gif'/>
      </div>
      </div>
    </div>
  </div>
</section>

{/* aartha */}

  <div className='container'>
  <div className='sus py-2'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>अर्थ</h5>
{three. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
    <div className='row'>
      {three.slice(0,3).map((j)=>(
      <div className='col-lg-4'>
        <div className='card shadow p-3 mb-5 bg-body rounded text-center '>
         <Link to={`/details/${j.id}`}><img className='w-100' src={j.img}/></Link>
          <h5 className='py-2'><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.title}</Link></h5>
          <p><Link className='link-dark' to={`/details/${j.id}`}>{j.head}</Link></p>
        </div>
      </div>
      ))}
    </div>
  </div>

  {/* samaj */}
  
  <section>
    
    <div className='container'>
    <div className='sus py-2'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>समाज</h5>
{four. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
      <div className='row'>
        <div className='col-lg-7'>
          {four.slice(0,1).map((e)=>(
            <div className='card box shadow-lg bg -body rounded text-center'>
             <Link to={`/details/${e.id}`}><img className='w-100' src={e.img}/></Link>
              <h4 className='py-2'><Link className='link-dark text-decoration-none ' to={`/details/${e.id}`}>{e.title}</Link></h4>
              <p><Link className='link-dark text-decoration-none' to={`/details/${e.id}`}>{e.desc}</Link></p>
              
              </div>
             ))}
         

        </div>
        <div className='col-lg-5'>
            {four.slice(1,4).map((f)=>(
              <div className=' one d'>
              <div className='card shadow-lg bg -body rounded my-1 py-3'>
                <div className='d-flex  gap-2'>

          <Link to={`/details/${f.id}`}><img className='image-thumbnail kku' src={f.img}/></Link> 
            <div className='text-center'>
            <h4><Link className='link-dark text-decoration-none' to={`/details/${f.id}`}>{f.title}</Link></h4>
            <p><Link className='link-dark text-decoration-none' to={`/details/${f.id}`}>{f.head}</Link></p>
            <p className='text-danger pb-2'><Link className='link-danger' to={`/details/${f.id}`}>{f.subt}</Link></p>
            </div>
            </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
   </section>

   {/* khel */}

<section>
  <div className='container'>
  <div className='sus my-3'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>खेल</h5>
{five. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>

    <div className='row'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {five.slice(0,4).map((d)=>(
      <SwiperSlide>
     <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '20rem'}}>
  <Link to={`/details/${d.id}`}><img  src={d.img} className="card-img-top w-100 kkk " alt="..." /></Link>
  <div className="card-body text-center ">
    <h5 className="card-title "><Link className='link-dark text-decoration-none'  to={`/details/${d.id}`}>{d.title}</Link></h5>
    <p className="card-text "><Link className='link-dark text-decoration-none' to={`details/${d.id}`}>{d.head}</Link></p>
  </div>
</div>

      </SwiperSlide>
      ))}
    </Swiper>
    

    </div>
  </div>
</section>
   
{/* aapradh */}
   
<section>
  <div className='container py-5 '>
    <div className='row'>
      {six.slice(0,1).map((d)=>(
      <div className='col-lg-8'>
             <div className='sus nmb py-2'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>अपराध</h5>
{six. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
        <div className='card shadow p-3 mb-5 bg-body rounded'>
        <Link to={`/details/${d.id}`}><img className='w-100 kkk ' src={d.img}/></Link>
          <h2 className='py-2 px-2'><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.title}</Link></h2>
          <p className='px-2'><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.head}</Link></p>
        </div>
        <div className='row'>
        {six.slice(1,2).map((e)=>(
          <div className='col-lg-6'>
          <div className='card shadow p-3 mb-5 bg-body rounded'> 
          <Link to={`/details/${e.id}`}><img className='w-100 kkk' src={e.img}/></Link>
            <h5 className='py-2'><Link className='link-dark text-decoration-none' to={`/details/${e.id}`}>{e.title}</Link></h5>
            <p><Link className='link-dark text-decoration-none' to={`/details/${e.id}`}>{e.head}</Link></p>
          </div>
        </div>
        ))}

        {six.slice(2,3).map((f)=>(
        <div className='col-lg-6'>
          <div className='card shadow p-3  bg-body rounded'>
           <Link to={`/details/${f.id}`}><img className='w-100' src={f.img}/></Link>
            <h5 className='py-2'><Link className='link-dark text-decoration-none' to={`/details/${f.id}`}>{f.title}</Link></h5>
            <p>{f.head}</p>
          </div>
        </div>
        ))}
        </div>
      </div>
      ))}
      <div className='col-lg-4 pb-5'>
      <img className='w-75' src='https://api.chakrapath.com/Content/AdImages/20210108532_290x145-pixels-mega-tik-banking.gif'/>
      <div>
        <img className='w-75 py-2' src='https://api.chakrapath.com/Content/AdImages/20220958927_350-x-150.gif'/>
      </div>
      </div>
    </div>
  </div>
</section>

{/* sampadhakiya */}
   
<section>
  <div className='container'>
  <div className='sus my-3'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>सम्पादकीय</h5>
{seven. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>

    <div className='row'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {seven.slice(7,10).map((d)=>(
      <SwiperSlide>
     <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '20rem'}}>
 <Link to={`/details/${d.id}`}><img  src={d.img} className="card-img-top w-100 kkk " alt="..." /></Link>
  <div className="card-body text-center ">
    <h5 className="card-title "><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.title}</Link></h5>
    <p className="card-text "><Link className='link-dark text-decoration-none' to={`/details/${d.id}`}>{d.head}</Link></p>
  </div>
</div>

      </SwiperSlide>
      ))}
    </Swiper>
    

    </div>
  </div>
</section>

{/* rajneeti */}

<section>
    
    <div className='container'>
    <div className='sus py-2'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>राजनीति</h5>
{eight. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
      <div className='row'>
        <div className='col-lg-7'>
          {eight.slice(0,1).map((e)=>(
            <div className='card box shadow-lg bg -body rounded text-center'>
          <Link to={`/details/${e.id}`}><img className='w-100' src={e.img}/></Link>
              <h4 className='py-2'><Link className='link-dark text-decoration-none ' to={`/details/${e.id}`}>{e.title}</Link></h4>
              <p><Link className='link-dark text-decoration-none' to={`/details/${e.id}`}>{e.desc}</Link></p>
              
              </div>
             ))}
         

        </div>
        <div className='col-lg-5'>
            {eight.slice(1,4).map((f)=>(
              <div className=' one d'>
              <div className='card shadow-lg bg -body rounded my-1 py-3'>
                <div className='d-flex py-3  gap-2'>

      <Link to={`/details/${f.id}`}><img className='rounded float-start image-thumbnail kkw w-100 mx-2' src={f.img}/></Link>
            <div className='text-center'>
            <h4><Link className='link-dark text-decoration-none' to={`/details/${f.id}`}>{f.title}</Link></h4>
            <p><Link className='link-dark text-decoration-none' to={`/details/${f.id}`}>{f.head}</Link></p>
            <p className='text-danger pb-2'><Link className='link-danger' to={`/details/${f.id}`}>{f.subt}</Link></p>
            </div>
            </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
   </section>

   {/* antarwarta */}

   <div className='container'>
  <div className='sus py-2 nmb'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>अन्तरवार्ता</h5>
{soul. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
    <div className='row'>
      {soul.slice(5,8).map((j)=>(
      <div className='col-lg-4'>
        <div className='card shadow p-3 mb-5 bg-body rounded text-center '>
        <Link to={`/details/${j.id}`}><img className='w-100 kkk' src={j.img}/></Link>
          <h5 className='py-2'><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.title}</Link></h5>
          <p><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.head}</Link></p>
        </div>
      </div>
      ))}
    </div>
  </div>

  {/* prashashan */}
   
  <div className='container'>
  <div className='sus py-2 nmb'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>प्रशासन</h5>
{nine. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
    <div className='row'>
      {nine.slice(0,3).map((j)=>(
      <div className='col-lg-4'>
        <div className='card shadow p-3 mb-5 bg-body rounded text-center '>
         <Link to={`/details/${j.id}`}><img className='w-100 kkk' src={j.img}/></Link>
          <h5 className='py-3'><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.title}</Link></h5>
          <p><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.head}</Link></p>
        </div>
      </div>
      ))}
    </div>
  </div>

  {/* image */}
  <div className='container'>
    <div className='row'>
      <img className='w-100' src='https://api.chakrapath.com/Content/AdImages/20215933430_machapuchre.gif'/>
    </div>
  </div>
  
  {/* gaunagar */}
  <div className='container'>
  <div className='sus py-2 nmb'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>गाउँ / नगर</h5>
{ten. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
    <div className='row'>
      {ten.slice(0,3).map((j)=>(
      <div className='col-lg-4'>
        <div className='card shadow p-3 mb-5 bg-body rounded text-center den '>
        <Link to={`/details/${j.id}`}> <img className='w-100 kkk' src={j.img}/></Link> 
          <h3 className='py-3'><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.title}</Link></h3>
          <p><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.head}</Link></p>
        </div>
      </div>
      ))}
    </div>
  </div>

  {/* suchana prabhdii */}

  <div className='container'>
  <div className='sus py-2 nmb'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>सूचना प्रविधि</h5>
{eleven. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
    <div className='row'>
      {eleven.slice(0,3).map((j)=>(
      <div className='col-lg-4'>
        <div className='card shadow p-3 mb-5 bg-body rounded text-center den '>
        <Link to={`/details/${j.id}`}><img className='w-100 kkk' src={j.img}/></Link>
          <h3 className='py-3'><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.title}</Link></h3>
          <p><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.head}</Link></p>
        </div>
      </div>
      ))}
    </div>
  </div>

  {/* swastha sikcha */}
   
  <div className='container'>
  <div className='sus py-2 nmb'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>स्वास्थ्य, शिक्षा</h5>
{twelve. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
    <div className='row'>
      {twelve.slice(0,3).map((j)=>(
      <div className='col-lg-4'>
        <div className='card shadow p-3 mb-5 bg-body rounded text-center den '>
       <Link to={`/details/${j.id}`}><img className='w-100 kkk' src={j.img}/></Link> 
          <h3 className='py-3'><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.title}</Link></h3>
          <p><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.head}</Link></p>
        </div>
      </div>
      ))}
    </div>
  </div>

 {/* Gallery */}
<div className='container'>
<div className='sus py-2 nmb'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>ग्यालरी</h5>
{thirteen. slice(0,1).map((k)=>(
<p className='text-danger'><Link className='link-danger' to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
  <div className='row'>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner dog">
     {thirteen.slice(1,7).map((d)=>(
    <div className="carousel-item active">
   <Link to={`/details/${d.id}`}><img src={d.img}className="d-block w-100 " alt="..." /></Link>
      <p className='am py-4'><Link className='link-dark fs-3 text-decoration-none' to={`/details/${d.id}`}>{d.title}</Link></p>
    </div>
     ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>








 {/* <div className='container'>
  <div className='row'>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
  {thirteen.slice(0,1).map((d)=>(
   <div className="carousel-item active">
     <img src={d.img} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <p className='am'>{d.title}</p>
      </div>
      
    </div>
    ))}
      {thirteen.map((d)=>(
    <div className="carousel-item">
      <img src={d.img} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <p className=' am'>{d.title}</p>
      </div>
    </div>
    ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  </div>
 </div> */}
   
   
   
   
   
   
   {/* <div className='container'>
    <div className='row'>
      <div className='col-lg-7'>
      <div className='sus py-2'>
</div>
<div className='d-flex justify-content-between'>
<h5 className='yog'>बिचार</h5>
{two. slice(0,1).map((k)=>(
<p className='text-danger'><Link to={`/cat/${k.cat}`}>सबै हेर्नुहाेस्</Link></p>
))}
</div>
        {two.slice(1,2).map((g)=>(
          <div className='card-body '>
          <img width="750" src={g.img}/>
          <h2 className='py-2'>{g.title}</h2>
          <p>{g.desc}</p>
          </div>
          ))}
          {two.slice(2,4).map((h)=>(

            <div className=' card four mx-2 '>
               <img width="300" src={h.img}/>
          <h5 className='py-2 mx-2'>{h.title}</h5>
              </div>
          ))}



      </div>
      <div className='col-lg-5'>
        {two.slice(3,4).map((i)=>(
          <div className='container xxx'>
          <img width="65%" src={i.img}/>
          </div>
        ))}
        <div className='yyy'>
        <a _ngcontent-serverapp-c47 target="_blank" style={{width: '75%'}} href="https://youtu.be/ffyyHmKNoE8"><img _ngcontent-serverapp-c47 className="#" style={{width: '75%'}} alt="#" title="#" src="https://api.chakrapath.com/Content/AdImages/20212126435_madanbhandari.gif" /></a>

          </div>
          <img className='w-75 py-2' src='https://api.chakrapath.com/Content/AdImages/20223904065_advert-yeti.gif'/>
      </div>
    </div>
   </div> */}

  






  </>
  
  )
}
