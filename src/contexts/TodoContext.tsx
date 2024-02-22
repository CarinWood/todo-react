import { ReactNode, createContext, useState } from "react";

type todoContext = {
  todos: todoItem[];
  setTodos: React.Dispatch<React.SetStateAction<todoItem[]>>;
};

type todoItem = {
  task: string;
  name: string;
  completed: boolean;
};

export const TodoContext = createContext({} as todoContext);

export function TodoContextProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<todoItem[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
