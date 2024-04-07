import './App.css';
import MethodsContainer from './components/MethodsContainer/MethodsContainer';
import NavigatorBar from './components/NavigatorBar/NavigatorBar';
import FooterBar from './components/FooterBar/FooterBar';

function App() {
  return (
    <div>
      <NavigatorBar/>
      <MethodsContainer/>
      <FooterBar/>
    </div>
  );
}

export default App;
