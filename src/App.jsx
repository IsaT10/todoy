import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <nav className="bg-primaryColor py-4">
        <h1 className="text-center text-3xl font-semibold text-white">TODOY</h1>
      </nav>
      <div className="max-w-2xl mx-5 sm:mx-10 md:mx-auto ">
        <div className="mt-10">
          <AddTodo />

          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
