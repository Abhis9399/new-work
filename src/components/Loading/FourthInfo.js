import React from "react";

function FourthInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Type"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Time Limit"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <input
        type="text"
        placeholder=""
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
}

export default FourthInfo;