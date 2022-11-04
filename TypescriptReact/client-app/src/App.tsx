import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import Home from "./Pages/Home/Home";

function App() {
  const [rowData, setRowData] = useState([]);
  const columnDefs = [
    { field: "temperatureC" },
    { field: "temperatureF" },
    { field: "date" },
    { field: "summary" },
  ];

  useEffect(() => {
    fetch("https://localhost:7260/weatherforecast")
      .then((response) => response.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div className="App">
      <Table
        rowData={rowData}
        columnDefs={columnDefs}
        isDark={true}
        pagination={true}
        perPage={2}
      />
    </div>
  );
}

export default App;
