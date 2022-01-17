// import logo from './logo.svg';
import classes from './App.module.css';
import MaptyMap from './components/Map/MaptyMap';
import Sidebar from './components/Sidebar/Sidebar';

const DummyList = [
  {
    activity: "Running",
    key: Math.random(),
    distance: 8,
    time: 10,
    cad: 68.6,
    bell: 5
  },
  {
    activity: "Walking",
    key: Math.random(),
    distance: 8,
    time: 10,
    cad: 68.6,
    bell: 5
  },
]

function App() {
  return (
    <div className={ classes.App }>
      <Sidebar ActivityList={ DummyList }></Sidebar>
      <MaptyMap></MaptyMap>
    </div>

  );
}

export default App;
