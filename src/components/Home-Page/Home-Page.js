import React from 'react'
import './Home-Page.css';

const HomePage = () => {
  return (
    <div className="content">
      <div className="user-info">
        <div>
          <span className="user-name">Sakshi Agrawal</span>
          <p>Here is everything you need</p>
        </div>
        <div className="form-group has-search searchbar">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search" />
       </div>
      </div>
      <div className="card-item">
          <p className="helping-text"><span className="helping-no">7</span>Actions need to be taken!</p>
        <div className="card-icon">
          <i className="fa fa-arrow-right" />
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <span>Stock</span>
          <p>100,000</p>
        </div>
        <div className="card second-card">
          <span>Order Pending</span>
          <p>90,000</p>
        </div>
        <div className="card third-card">
          <span>Stock</span>
          <p>30,000</p>
        </div>
        <div className="card fourth-card">
          <span>Stock</span>
          <p>10,000</p>
        </div>
      </div>
      <div className="container">
        <div style={{display: 'flex', gap: '25px'}}>
            <div style={{width: '40%',}}>
              <div className="gps-screen">
                <div style={{border: '1px solid red', height: '70%'}}></div>
                <div style={{ marginTop: '10px'}}>
                   <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className='first-strip'></div>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                      </ul>
                    </div>
                </div>
              </div>
              <div className="gps-screen"></div>
            </div>
            <div style={{width: '60%',}}>
              <div className="gps-screen"></div>
            </div>
            </div>  
      </div>
    </div>
  );
};

export default HomePage;