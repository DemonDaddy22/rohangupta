import Header from './components/Header';
import Description from './components/Description';
import Ripples from './components/Ripples';
import './App.scss';

function App() {
    return (
        <div className="app">
            <div className="contentContainer">
                <Header />
                <Description />
            </div>
            <Ripples />
        </div>
    );
}

export default App;
