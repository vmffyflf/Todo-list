import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './page/TodoTemplate.js';
import TodoHead from './page/TodoHead.js';
import TodoList from './page/TodoList.js';
import TodoCreate from './page/TodoCreate.js';
import { TodoProvider } from './TodoContext.js';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;
function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
