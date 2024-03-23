import { Header } from '../common/components/Header';
import { Footer } from '../common/components/Footer';
import { Error } from '../common/components/Error';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { User } from './pages/User';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
