import { Provider } from "react-redux";
import "./App.css";

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header>Header</header>
        <div>This is Fine</div>
      </div>
    </Provider>
  );
}

export default App;
