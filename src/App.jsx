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

  const handleClear = () => {
    setFormData({ name: "", age: "", place: "" });
  };

  const handleRemove = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  return (
    <div className="container">
      <h1>Add People to Table</h1>

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
        <button onClick={handleClear}>Clear</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length === 0 ? (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          ) : (
            tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.place}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
