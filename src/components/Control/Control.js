import React from 'react';
import './Control.css';

const LeftComponent = () => {
  return <div className="left-control-component">
    <div className="control-content"></div>
  </div>;
};


const TableComponent = () => {
    const data = [
      { id: 1, slipNo: '001', date: '2023-07-01', programmer: 'John Doe', status: 'Delivered', remark: 'good' },
      { id: 2, slipNo: '002', date: '2023-07-02', programmer: 'Jane Smith', status: 'Not Delivered', remark: 'good' },
      { id: 1, slipNo: '001', date: '2023-07-01', programmer: 'John Doe', status: 'Delivered', remark: 'good' },
      { id: 1, slipNo: '001', date: '2023-07-01', programmer: 'John Doe', status: 'Delivered', remark: 'good' },
    ];
  
    return (
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Department</th>
            <th>Module</th>
            <th>Place</th>
            <th>Work Description</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>
                {/* {item.id} */}
                <div style={{ backgroundColor: 'white', width: '46px', height: '30px', border: '1px solid gray'}} />
              </td>
              <td>
                {/* {item.slipNo} */}
                <div style={{  backgroundColor: 'white', width: '110px', height: '30px', border: '1px solid gray' }} />
              </td>
              <td>
                {/* {item.date} */}
                <div style={{  backgroundColor: 'white', width: '110px', height: '30px', border: '1px solid gray' }} />
                </td>
              <td>
                {/* {item.programmer} */}
                <div style={{  backgroundColor: 'white', width: '110px', height: '30px', border: '1px solid gray'}} />
                </td>
              <td>
                <div style={{  backgroundColor: 'white', width: '110px', height: '30px', border: '1px solid gray' }} />
              </td>
              <td>
                 <div style={{ backgroundColor: 'white', width: '110px', height: '30px', border: '1px solid gray' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

const MainComponent = () => {
  return (
    <div className="main-control-component">
      <div className="sub-control-component1">
           <div className="team-heading"><h6>Team A/B/C</h6></div>
           <div className="team-info">
            <div className="percent-33">
                <span>Comapny Name</span>
                <input type="text" />
            </div>
            <div className="percent-33">
                <span>Module</span>
                <input type="text" />
            </div>
            <div className="percent-33">
                <span>Level</span>
                <input type="text" />
            </div>
            <div className="percent-33">
                <span>Gender</span>
                <input type="text" />
            </div>
            <div className="percent-33">
                <span>Planning</span>
                <input type="text" />
            </div>
            <div className="percent-33">
                <span>Place</span>
                <input type="text" />
            </div>
            </div>
            <div class="dropdown" style={{marginTop:'20px', marginLeft:'12px'}}>
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   Work Type
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
      </div>
      <div className="sub-control-component2">
        <div style={{display: 'flex', width: '100%'}}>
            <div className="department">
                <span className="department-sec">Department1</span>
            </div>
            <div className="department">
               <span className="department-sec">Department1</span>
            </div>
            <div className="department">
               <span className="department-sec">Department1</span>
            </div>
            <div className="department">
               <span className="department-sec">Department1</span>
            </div>
        </div>
      </div>
      <div className="sub-control-component3">
        <div className="sub-control-component3-inner">
            <div className="team-info">
              <TableComponent />
            </div>
           <button style={{width: '97%', padding: '8px', backgroundColor: 'white', marginLeft: '12px', marginRight: '12px'}}>Add More</button>
        </div>
      </div>
    </div>
  );
};

const RightComponent = () => {
  return <div className="right-control-component">
    <div className="control-content"></div>
  </div>;
};

const Control = () => {
  return (
    <div className="control-container">
      <div className="control-left">
        <LeftComponent />
      </div>
      <div className="control-main">
        <MainComponent />
      </div>
      <div className="control-right">
        <RightComponent />
      </div>
    </div>
  );
};

export default Control;