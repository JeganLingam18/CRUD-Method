import React, { useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
function Heading1() {
  const [values, setValues] = useState({
    username: "",
    useremail: "",
    phone: "",
    city: "",
    role: "",
  });
  const [load, setLoad] = useState(false);
  function getdata(e) {
    let key = e.target.name;
    let value = e.target.value;
    setValues((pre) => {
      return { ...pre, [key]: value };
    });
  }

  async function handlesubmit() {
    setLoad(true);
    try {
      const response = await axios.post(
        "https://6735c5285995834c8a940641.mockapi.io/user",
        values
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  }

  return (
    <>
      <Link to="details" className="UserDetails"  >Check User Details</Link>
      <form>
        <div>
          <label>Name:</label>
          <input
            name="username"
            onChange={(event) => {
              getdata(event);
            }}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            name="useremail"
            onChange={(event) => {
              getdata(event);
            }}
          />
        </div>
        <br />
        <div>
          <label>City:</label>
          <input
            name="city"
            onChange={(event) => {
              getdata(event);
            }}
          />
        </div>
        <br />
        <div>
          <label>Phone:</label>
          <input
            name="phone"
            onChange={(event) => {
              getdata(event);
            }}
          />
        </div>
        <br />
        <div>
          <label>Role:</label>
          <input
            name="role"
            onChange={(event) => {
              getdata(event);
            }}
          />
        </div>
        <br />
        <button
          type="button"
          disabled={load}
          onClick={() => {
            handlesubmit();
          }}
        >
          {load ? "Submitting..." : "Submit"}
        </button>
      </form>
      <Outlet />
    </>
  );
}

export default Heading1;
