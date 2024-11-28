import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Fulldetails() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    const response = await axios.get(
      "https://6735c5285995834c8a940641.mockapi.io/user/" + id
    );
    setData(response.data);
    console.log(data);
  }
  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Role</th>
        </thead>
        <tbody>
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.username}</td>
            <td>{data.useremail}</td>
            <td>{data.phone}</td>
            <td>{data.city}</td>
            <td>{data.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Fulldetails;
