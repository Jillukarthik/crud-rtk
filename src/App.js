import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddEdit from "./components/AddEdit/AddEdit";
import View from "./components/View/View";
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addContact" element={<AddEdit/>} />
          <Route path="/update/:id" element={<AddEdit/>} />
          <Route path="/view/:id" element={<View/>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
