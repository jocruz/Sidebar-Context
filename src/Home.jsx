import React from "react";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        Open Side Bar
      </button>
      <button className="btn" onClick={openModal}>
        Open Modal
      </button>
    </main>
  );
};

export default Home;
