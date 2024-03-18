import { Header } from '../common/components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store';
import { Home } from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
