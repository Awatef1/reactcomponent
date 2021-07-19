
import './App.css';
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import FullName from './Components/Profile/FullName';
import Address from "./Components/Profile/Address";
function App() {
  return (
    <div className="App">
      <>
      <FullName/>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <ProfilePhoto/>
      </div> 
      
      <Address/>
      </>
    </div>
  );
}

export default App;
