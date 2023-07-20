import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Programmer1 Name"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Supervisor Name"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Programmer2 Name"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      {/* <input
        type="text"
        placeholder="Type of Labour"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      /> */}
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: 'white', color:'gray'}}>
                Type of Labour
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Palledar</a></li>
                <li><a class="dropdown-item" href="#">Labour</a></li>
            </ul>
        </div>
    </div>
  );
}

export default PersonalInfo;