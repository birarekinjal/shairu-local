import logo from './logo.svg';
import './App.css';
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { persistor } from "./setup/store";
import AuthenticationDemo from './modules/authentication/authentication-demo';
// import { simpleAction } from './modules/authentication/redux/authenticationAction';


function App() {

  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  // console.log(state, " +++")

  // const handleClick = () => {
  //   dispatch(simpleAction())
  // }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">

          {/* //<button onClick={handleClick}> Check the Redux </button> */}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <AuthenticationDemo />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </PersistGate>
    </Provider>



  );
}

export default App;
