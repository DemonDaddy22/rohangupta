import './App.scss';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="contentContainer">
                <Introduction />
                <Education />
                <Experience />
                <Projects />
            </div>
        </div>
    );
}

export default App;
