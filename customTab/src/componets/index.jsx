import { createContext, useContext, useState } from "react";
import Tabpane from "./Tabpane";

const TabsContext = createContext();

const Tabs = ({ children, defaultActiveKey }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);


  const onSelectTab = (key) => setActiveKey(key);

  return (
    <TabsContext.Provider value={{ activeKey, onSelectTab }}>
      <div
        style={{
          width: "100%",
          height: "auto",
          border: "1px solid black",
          backgroundColor: "#c8d2da",
          borderRadius: "8px",
        }}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};




const TabList = ({ children }) => (
  <ul
    style={{
      display: "flex",
      listStyle: "none",
      borderBottom: "1px solid black",
    }}
  >
    {children}
  </ul>
);


const Tab = ({ children, eventKey }) => {
  const { activeKey, onSelectTab } = useContext(TabsContext);

  return (
    <li
      onClick={() => onSelectTab(eventKey)}
      style={{
        margin: "0px 10px",
        border: "1px solid white",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: activeKey === eventKey ? "green" : "",
        color: activeKey === eventKey ? "white" : "black",
        cursor: "pointer",
      }}
    >
      {children}
    </li>
  );
};



const TabPanel = ({ children, eventKey }) => {
  const { activeKey } = useContext(TabsContext);

  return activeKey === eventKey ? <div>{children}</div> : null;
};


Tabs.TabList=TabList;
Tabs.Tab=Tab;
Tabs.TabPanel=TabPanel;





export default Tabs;
