 
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Header from './components/layout/header';
import MobileNav from './components/layout/mobile-menu/MobileNav'
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <MobileNav/>
      <Routing/>

      <Footer />
      <BackTop>
        <UpOutlined />
      </BackTop>
    </BrowserRouter>
    </>
  );
}

export default App;
