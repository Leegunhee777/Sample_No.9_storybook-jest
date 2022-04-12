import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example2 from 'Component/Common/Button/Example2';
import Example from 'Component/Common/Button/Example';
import { BasicButton } from 'Component/Common/Button/BasicButton';
function App() {
  const onHandleClick = () => {
    console.log('rkskek');
  };
  return (
    <div>
      <Example>ww</Example>
      <Example2>bb</Example2>
      <BasicButton filled={false} label="가나다" />
      <BasicButton
        filled={true}
        backgroundColor="green"
        size="large"
        label="가나다"
        onClick={onHandleClick}
      />
    </div>
  );
}

export default App;
