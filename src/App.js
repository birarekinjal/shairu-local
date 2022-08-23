import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./setup/store";
import ThemeLayout from "./core/layout/themeLayout/themeLayout";
import DataGridLayout from "./core/layout/themeLayout/dataGridLayout/DataGridLayout";
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
          <ThemeLayout />
          <DataGridLayout />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
