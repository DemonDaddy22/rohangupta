import Header from './components/Header';
import Description from './components/Description';
import Ripples from './components/Ripples';
import './App.scss';
import ShootingStars from './components/ShootingStars';
import SocialMediaIcons from './components/SocialMediaIcons';

function App() {
    return (
        <div className="app">
            <ShootingStars />
            <div className="contentContainer">
                <Header />
                <Description />
                <SocialMediaIcons />
            </div>
            <Ripples />
        </div>
    );
}

export default App;
