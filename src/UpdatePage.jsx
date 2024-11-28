import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const [data, setData] = useState({
    username: "",
    useremail: "",
    city: "",
    phone: "",
    role: "",
  });
  const [load, setLoad] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    Updated();
  }, []);

  async function Updated() {
    const response = await axios.get(
      "https://6735c5285995834c8a940641.mockapi.io/user/" + id
    );
    setData(response.data);
  }

  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData((pre) => {
      return { ...pre, [key]: value };
    });
  }
  async function handleSubmit() {
    setLoad(true);
    try {
      await axios.put(
        "https://6735c5285995834c8a940641.mockapi.io/user/" + id,
        data
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  return (
    <div className="update-page">
      <h2>Update Page</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            name="username"
            value={data.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="useremail"
            value={data.useremail}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input name="city" value={data.city} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input name="phone" value={data.phone} onChange={handleInputChange} />
        </div>
        <div>
          <label>Role:</label>
          <input name="role" value={data.role} onChange={handleInputChange} />
        </div>
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          {load ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default UpdatePage;
