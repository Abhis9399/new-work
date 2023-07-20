import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      {/* <input
        type="text"
        placeholder="Type"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      /> */}
      <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: 'white', color:'gray'}}>
                Type
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Private</a></li>
                <li><a class="dropdown-item" href="#">Tendor</a></li>
            </ul>
        </div>
      <input
        type="text"
        placeholder="Time Limit"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      {/* <input
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      /> */}
    </div>
  );
}

export default SignUpInfo;