import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./../app-routing";
import "./App.css";
import { Footer, Header } from "./components";
import createStore from "./rtk/store";
import { AlertContainer, DialogProvider } from "./ui-components";

function App() {
  return (
    <div>
      <Provider store={createStore()}>
        <div className="App">
          <BrowserRouter>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                justifyContent: "space-between",
              }}
            >
              <Header />
              <AppLayout />
              <Footer />
            </div>
          </BrowserRouter>
          <AlertContainer autoCloseDelay={5000} autoClose={false} />
          <DialogProvider />
        </div>
      </Provider>
    </div>
  );
}

export default App;
