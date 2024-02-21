import Chat from "./Chat";
import Navbar from "./Navbar";
import SideNav from "./SideNav";



const Home = () => {


  return (
    <div className="home">
      <Navbar/>
      <SideNav/>
      <Chat/>
    </div>
  );
};

export default Home;
