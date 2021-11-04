import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {GreetingMessage} from "./components/GreetingMessage";
import axios from "axios";


const App = () => {
  const greetingApiUrl: string = 'http://localhost:8080';
  type GreetingResponse = {
    message: string;
  };
  // state
  const [response, setResponse] = useState<GreetingResponse>({message: "(click button and then greeting message here.)"});

  const onClickButton = () => {
    axios.get<GreetingResponse>(greetingApiUrl).then((res) => {
      console.log(res);
      setResponse(res.data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 style={{color: 'skyblue'}}>Hello My First React!</h1>
        <button onClick={onClickButton}>get greeting message</button>
        <GreetingMessage>{response.message}</GreetingMessage>
      </header>
    </div>
  );
}

export default App;
