import { TodoContextProvider } from "./contexts/TodoContext";
import Home from "./pages/Home";

export function App() {
  return (
    <div className="app">
      <TodoContextProvider>
      <Home/>
      </TodoContextProvider>
    </div>
  );
}
