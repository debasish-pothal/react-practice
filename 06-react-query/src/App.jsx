import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <section className="section-center">
      <ToastContainer position="top-right" />
      <Form />
      <Items />
    </section>
  );
};

export default App;
