// import logo from './logo.svg';
import './App.css';

//import components
import Header from './components/header/header';
import Team from './components/team/team';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Meet from './components/meet/meet';

function App() {
  return (
    <div>
      <Header />
      <Meet />
      <About />
      <Mint />
      <TopItems />
      <RoadMap />
      <Team />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
