import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./../app-routing";
import "./App.css";
import { Footer, Header } from "./components";
import createStore from "./rtk/store";
import { AlertContainer } from "./ui-components";

function App() {
  return (
    <div>
      <Provider store={createStore()}>
        <div className="App">
          <BrowserRouter>
            <div className="wrapper">
              <Header />
              <AppLayout />
              <Footer />
            </div>
          </BrowserRouter>
          <AlertContainer autoCloseDelay={5000} autoClose={false} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
