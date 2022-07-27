import './App.css'
// import HomeFooter from './HomePages/HomeFooter';
import HomeHeader from './HomePages/HomeHeader'
import HomeMainContainer from './HomePages/HomeMainContainer';

function App() {
  return (
    <div className="main">
      <HomeHeader />
      <HomeMainContainer />
      {/* <HomeFooter /> */}
    </div>
  );
}

export default App;
