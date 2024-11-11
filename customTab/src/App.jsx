import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabs from "./componets";

function App() {
  // const onChange = (key) => {
  //   console.log(key);
  // };
  // const items = [
  //   {
  //     key: "1",
  //     label: "Tab 1",
  //     children: "Content of Tab Pane 1",
  //   },
  //   {
  //     key: "2",
  //     label: "Tab 2",
  //     children: (
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           height: "30vh",
  //           backgroundColor: "#f5f5f5",
  //           fontFamily: "Arial, sans-serif",
  //         }}
  //       >
  //         <div
  //           style={{
  //             backgroundColor: "#fff",
  //             borderRadius: "8px",
  //             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  //             padding: "20px",
  //             maxWidth: "300px",
  //             textAlign: "center",
  //           }}
  //         >
  //           <h1 style={{ fontSize: "24px", margin: "0 0 10px" }}>Welcome!</h1>
  //           <p>This is a simple card layout.</p>
  //           <button
  //             style={{
  //               padding: "10px 20px",
  //               border: "none",
  //               borderRadius: "5px",
  //               backgroundColor: "#007bff",
  //               color: "#fff",
  //               cursor: "pointer",
  //             }}
  //             onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
  //             onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
  //           >
  //             Click Me
  //           </button>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: "Tab 3",
  //     children: "Content of Tab Pane 3",
  //   },
  // ];

  return (
    <>
      <h3> This is Custom tab component like Antd. </h3>
      <Tabs defaultActiveKey="1">
        <Tabs.TabList>
          <Tabs.Tab eventKey="1">Tab 1</Tabs.Tab>
          <Tabs.Tab eventKey="2">Tab 2</Tabs.Tab>
          <Tabs.Tab eventKey="3">Tab 3</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel eventKey="1">Content of Tab Pane 1</Tabs.TabPanel>
        <Tabs.TabPanel eventKey="2">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
              backgroundColor: "#f5f5f5",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                maxWidth: "300px",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontSize: "24px", margin: "0 0 10px" }}>Welcome!</h1>
              <p>This is a simple card layout.</p>
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                Click Me
              </button>
            </div>
          </div>
        </Tabs.TabPanel>
        <Tabs.TabPanel eventKey="3">Content of Tab Pane 3</Tabs.TabPanel>
      </Tabs>
    </>
  );
}

export default App;
