import AllItems from "./component/AllItems";
import DataContextProvider from "./component/context/SelectedContext";
import SelectedItems from "./component/SelectedItems";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <AllItems/>
        <SelectedItems/>
      </DataContextProvider>
    </div>
  );
}

export default App;
