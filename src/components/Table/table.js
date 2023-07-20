import React, {useState} from 'react'
import "./table.css";


function Table() {
    const [containers, setContainers] = useState([1]);

    const handleAddMore = () => {
      setContainers([...containers, {}]);
    };
  
    return (
        <div className="main-contain">
        <div style={{ height: '100vh', marginTop:'35px' }}>
        {containers.map((container, index) => (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div key={index} className="container4">
                   <div className='sub-container'>
                        <div className="first"></div>
                        <div className="second"></div>
                        <div className="third"></div>
                   </div>
                   <div className='sub-container'>
                         {/* <i class="fa fa-clock"></i> */}
                        <div className="first sub-first"></div>
                   </div>
                   <div className="first sub-first sub2"></div>
                </div>
          </div>
        ))}
        <button className="btn-add"onClick={handleAddMore}><i className="fa fa-plus" style={{color: 'orange'}}></i></button>
      </div>
      </div>
    );
}

export default Table