import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Data/Product'



export default function Cat() {
    let {cid}=useParams()
    var displayPost=Product.filter((a)=>a.cat==cid)
  return (
    <>

   <div className='container p-4'>
    <div className='row'>
      <div className='col-lg-9'>
        <div className='row'>
          {displayPost.map((i)=>(
          <div className='col-lg-4 py-2'>
 <div className="card shadow-lg p-3 mb-5 bg-body rounded mb-5" style={{width: '18rem'}}>
  <img src={i.img} className="card-img-top kkk" alt="..." />
  <div className="card-body">
    <h5 className="card-title shank border-bottom">{i.title}</h5>
    <a href="#" className="btn rit ms-5 bg-danger "><Link className=' text-white text-decoration-none' to={`/details/${i.id}`}>विस्तृतमा पढ्नुस्</Link></a>

  </div>
</div>


          </div>
          ))}
          
          
        </div>
        <h2>प्रतिक्रिया</h2>
        <div className='box shadow p-3 mb-5 bg-body rounded py-2'>
       <form>
  <div className="mb-3  ">
    <label htmlFor="exampleInputEmail1" className="form-label ">नाम *</label>
    <input type="email" className="form-control form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">इमेल *</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">टिप्पणी *</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-danger w-100 my-3">पठाउनुहाेस्</button>
</form>
</div>
<h5>टिप्पणीहरू (०)</h5>
<div>
  <img className='w-100 py-2' src='https://api.chakrapath.com/Content/AdImages/20222028596_hybrid-bachat_800x150px(1).gif'/>
</div>
<div>
  <img className='w-100' src='https://api.chakrapath.com/Content/AdImages/20215933430_machapuchre.gif'/>
</div>
<div>
  <img className='w-100' src='https://api.chakrapath.com/Content/AdImages/20213157162_1120x120.gif'/>
</div>
        
      </div>
      <div className='col-lg-3 py-2 '>
              <div className='row'>
              <img src='https://api.chakrapath.com/Content/AdImages/20212126435_madanbhandari.gif'/>
              <img src='https://api.chakrapath.com/Content/AdImages/20210108532_290x145-pixels-mega-tik-banking.gif'/>
              <img src='https://api.chakrapath.com/Content/AdImages/20223904065_advert-yeti.gif'/>
              </div>
        </div>


    </div>
   </div>

   {/* hello */}

   <div className='container'>
  <div className='sus py-2 nmb'>
</div>
<div>
<h5 className='yog'>यो पनि पढ्नुहोस्</h5>
</div>
    <div className='row'>
      {displayPost.slice(0,4).map((j)=>(
      <div className='col-lg-3'>
        <div className='card shadow p-3 mb-5 bg-body rounded text-center den '>
          <img className='w-100 kkd' src={j.img}/>
          <h3 className='py-3'><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.title}</Link></h3>
          <p><Link className='link-dark text-decoration-none' to={`/details/${j.id}`}>{j.head}</Link></p>
        </div>
      </div>
      ))}
    </div>
  </div>




   
   
   
   
   
   
   
   
   
   
   
   
    {/* next part */}

    
     {/* <div className='container py-4 '>
        <h2>category</h2>
        <div className='row '>
            {displayPost.slice(0,10).map((i)=>(
                <div className='card col-lg-4  '>
                    <img src={i.img} className="w-100 kkk"/>
                    <p className='text-center py-2 '><Link className='link-dark shank '  to={`/details/${i.id}`}>{i.title}</Link></p>
                    <div className='border-top rit'>
                      <p><Link to={`/details/${i.id}`}>विस्तृतमा पढ्नुस्</Link></p>
                      </div>
                   
                </div>
            ))}
                 
        </div>
    </div>  */}

    {/* another part */}

    {/* <div className='container  py-2 gap-2'>
        <h2>category</h2>
        <div className='row'>
            {displayPost.slice(0,1).map((i)=>(
                <div className=' col-lg-4'>
        <div className="card  " style={{width: '24rem'}}>
  <img src={i.img} className="card-img-top your" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{i.title}</h5>
    <p><Link className='link-dark' to={`/details/${i.id}`}><strong>{i.title}</strong></Link></p>
  </div>
</div>

                   
                </div>
            ))}
             {displayPost.slice(1,2).map((i)=>(
                <div className=' col-lg-4 py-2'>
        <div className="card  " style={{width: '24rem'}}>
  <img src={i.img} className="card-img-top your " alt="..." />
  <div className="card-body">
    <h5 className="card-title">{i.title}</h5>
    <p><Link className='link-dark' to={`/details/${i.id}`}><strong>{i.title}</strong></Link></p>
  </div>
</div>

                   
                </div>
            ))}
            {displayPost.slice(2,4).map((i)=>(
                <div className=' col-lg-4'>
        <div className="card  " style={{width: '24rem'}}>
  <img src={i.img} className="card-img-top your mx-0" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{i.title}</h5>
    <p><Link className='link-dark' to={`/details/${i.id}`}><strong>{i.title}</strong></Link></p>
  </div>
</div>

                   
                </div>
            ))}
            
            
            

        </div>
       
    </div>
     */}
    </>
  )
}
