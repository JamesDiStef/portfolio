import { Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
import Calculator from "./Calculator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/todo" element={<TodoList />} />
    </Routes>
  );
}

export default App;
