import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Login from "./pages/login";
import Login from "@/pages/login";
// import Layout from "./pages/layout";
import Layout from "@/pages/layout";

function App() {
  return (
      // 路由配置
      <BrowserRouter>
          <div className="App">
              <Routes>
                  {/*路由对应关系和组件对应关系*/}
                  <Route path="/" element={ <Layout /> }></Route>
                  <Route path="/login" element={ <Login /> }></Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
