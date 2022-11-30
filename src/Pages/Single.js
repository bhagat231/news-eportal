import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Data/Data'
import Product from '../Data/Product'

export default function Single() {
    let {id}=useParams()
    var displayPost1=Product.find((a)=>a.id==id)
    var trend=Product.filter((q)=>q.cat==7)
   
  return (
    <>
      <div className='container  py-3'>
        <h1 className='py-3 text-decoration-underline'>{displayPost1.title}</h1>
        <img className='w-75' src={displayPost1.img}/>
        <h2 className='py-4 text-justify '>{displayPost1.desc}</h2>
        
    </div>
    <div className='container'>
  <div className='row'>
    <div className='col-lg-9'>
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
</div>
</div> 


<div className='container'>
  <div className='sus py-2 nmb'>
</div>
<div>
<h5 className='yog'>यो पनि पढ्नुहोस्</h5>
</div>
    <div className='row'>
      {trend.slice(0,4).map((j)=>(
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





    </>
  )
}

 
