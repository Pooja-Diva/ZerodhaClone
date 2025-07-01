import React from 'react';

function Hero() {
    return (
     <section className="container-fluid" id='supportHero'>
      <div className="p-5 " id='supportWrapper'>
        <h4 style={{marginBottom:"-6px"}}>Support Portal</h4>
        <a href=''>Track Tickets</a>
      </div>

       <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h1 className='fs-3' style={{marginTop:"-3rem",marginBottom:"16px",marginLeft:"85px"}}>Search for an answer or browse help topics to create a ticket</h1>
          <input  style={{marginBottom:"16px",marginLeft:"85px"}} placeholder='Eg: how do i activate F&amp;O, why is my order getting rejected..' /><br/>
          <div style={{marginBottom:"16px",marginLeft:"85px"}}>
            <a href='' >Track account opening</a>
            <a href=''>Track segment activation</a>
            <a href=''>Intraday margins</a>
            <a href=''>Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-5">
          <h1 className='fs-3' id='feature'>Featured</h1>
          <ol >
            <li id='list1'><a href=''>Current Takeovers and Delisting - January 2024</a></li>
            <li id='list2'> <a href=''>Latest Intraday leverages - MIS &amp; CO</a></li>
          </ol>
        </div>
      </div>
     </section>
      );
}

export default Hero;