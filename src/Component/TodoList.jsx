import { useState } from 'react';
import Header from './Header/Header';
import Todo from './Todo';

export default function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');

  // فیلتر کردن Todoها بر اساس وضعیت
  const filteredTodos = todos.filter(todo => {
    if (status === 'All') return true;
    if (status === 'Completed') return todo.isCompleted;
    if (status === 'Uncompleted') return !todo.isCompleted;
  });

  // افزودن Todo جدید
  function onFormSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      title: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  // حذف Todo
  function removeTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  // تغییر وضعیت complete
  function toggleTodo(todoId) {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  }

  // تغییر فیلتر
  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-400 to-sky-700">
      <Header />

      {/* فرم افزودن Todo */}
      <div className="mt-14 flex gap-6">
        <form onSubmit={onFormSubmit}>
          <div className="flex shadow-lg">
            <input
              type="text"
              placeholder="Learning js"
              className="w-80 px-5 py-3 bg-gray-200 focus:outline-none text-gray-700"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button
              className="bg-sky-800 w-14 flex items-center justify-center text-white text-2xl hover:bg-sky-900 transition"
            >
              +
            </button>
          </div>
        </form>

        {/* فیلتر */}
        <div className="flex shadow-lg">
          <div className="w-40 px-5 py-3 bg-gray-200 text-gray-700 flex items-center rounded-sm">
            <select
              className="bg-gray-200 w-full outline-none"
              onChange={handleStatusChange}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Uncompleted">Uncompleted</option>
            </select>
          </div>
        </div>
      </div>

      {/* لیست Todo */}
      <div className="mt-16 shadow-lg m-1 w-[500px]">
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onRemove={removeTodo}
            onEdite={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
}
