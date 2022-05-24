import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import MainDash from './component/MainDash/MainDash';
import RightSide from './component/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
