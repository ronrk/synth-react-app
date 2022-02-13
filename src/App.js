
import Pages from './pages/Pages'
import { AudioProvider } from './store/AudioContext';

import './App.css';

function App() {
  return (
      <AudioProvider>
        <Pages />
    </AudioProvider>
  );
}

export default App;
