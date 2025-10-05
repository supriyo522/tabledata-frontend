import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", age: "", place: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    const { name, age, place } = form;
    if (name && age && place) {
      setPeople([...people, { name, age, place }]);
      setForm({ name: "", age: "", place: "" });
    }
  };

  const handleDelete = (index) => {
    const updated = people.filter((_, i) => i !== index);
    setPeople(updated);
  };

  return (
    <div className="container">
      <h1>People Table App</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Place"
          name="place"
          value={form.place}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {people.length === 0 ? (
        <p className="empty-text">No entries yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Place</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.place}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
