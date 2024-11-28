import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

function Details() {
  const [detail, setDetail] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    const response = await axios.get(
      "https://6735c5285995834c8a940641.mockapi.io/user"
    );
    setDetail(response.data);
  }

  async function deleteDetails(id) {
    try {
      await axios.delete(
        "https://6735c5285995834c8a940641.mockapi.io/user" + "/" + id
      );

      getApi();
    } catch (e) {
      console.log(e);
    } finally {
      console.log("wel");
    }
  }
  function navPage(id) {
    navigate("Update/" + id);
  }
  function navPages(id) {
    navigate("Fulldetails/" + id);
  }
  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
          <th>Changes</th>
          <th>Add.Details</th>
        </thead>
        <tbody>
          {detail &&
            detail.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.username}</td>
                  <td>{value.useremail}</td>
                  <td>{value.phone}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteDetails(value.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        navPage(value.id);
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        navPages(value.id);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}

export default Details;
