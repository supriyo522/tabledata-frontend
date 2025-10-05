import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", age: "", place: "" });
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const { name, age, place } = formData;

    if (name && age && place) {
      setTableData([...tableData, { name, age, place }]);
      setFormData({ name: "", age: "", place: "" });
    }
  };

  return (
    <div className="container">
      <h1>Table Data</h1>
      <div className="input-section">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Enter Place"
          value={formData.place}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
