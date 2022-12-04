import React from 'react'
import bbimg from '../../assets/img/bbimg.jpg'
export default function Home() {
  return <div className="p-5">Home 
 <div className="pb-5">
    <h1 className="fs-1 text-light text-center">The real fandom site of Breaking Bad is here...!!!</h1>
    </div>
    <div className="px-1">
      <p className="text-light text-center fs-3">Visit us to learn about episodes, funny phrases, wise phrases, 
      the most painful deaths and the best characters from your favorite series, all on our site </p>
  <div className="px-5">
  <div className="px-5">
    <img src={bbimg} alt="Breaking Bad" className="img-fluid" />
  </div>
  </div>
  </div>
  </div>;
}
