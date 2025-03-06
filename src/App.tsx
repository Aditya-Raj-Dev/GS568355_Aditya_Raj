import React from 'react';

import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import SIdeBar from './components/SIdeBar';
import { Flex } from '@chakra-ui/react';

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <div className="App">
    {isAuth && <Navbar/>}
    {isAuth ? 
      <Flex minH="100vh" w="100%"> 
        <SIdeBar/> 
        <Flex 
          bg="gray.200"  
          flex="1"
          minH="calc(100vh - navbarHeight)"
          p={4}         
        >
          <AllRoutes/>
        </Flex>
      </Flex>
      : 
      <AllRoutes/>
    }
  </div>
  );
}

export default App;
