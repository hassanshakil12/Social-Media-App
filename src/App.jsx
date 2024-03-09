import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <Navbar />
      <div style={{ display: "flex", width: "100vw", minHeight: "80.5vh" }}>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="posts" style={{ width: "100%" }}>
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        </div>
      </div>
      <Footer />
    </PostListProvider>
  );
}

export default App;
