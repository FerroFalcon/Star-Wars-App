import { createRoot } from "react-dom/client";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Navbar from "./src/components/Navbar";
import SearchArea from "./src/components/SearchArea";
import DataSection from "./src/components/DataSection";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchArea />
      <DataSection />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
