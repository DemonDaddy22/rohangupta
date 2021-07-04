import Header from './components/Header';
import Description from './components/Description';
import Ripples from './components/Ripples';
import './App.scss';
import ShootingStars from './components/ShootingStars';

function App() {
    return (
        <div className="app">
            <ShootingStars />
            <div className="contentContainer">
                <Header />
                <Description />
            </div>
            <Ripples />
        </div>
    );
}

export default App;
