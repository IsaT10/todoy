import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodoStatus } from '../redux/Features/Todo/todoSlice';
import { PiTrashFill } from 'react-icons/pi';

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todos.length === 0 ? (
        <span className="text-2xl font-semibold text-red-500 text-center h-[50vh] flex items-center justify-center">
          There are currently no todo item
        </span>
      ) : (
        <>
          <h3 className="text-lg font-semibold">All Todo</h3>
          <ul className="flex gap-5 flex-col ">
            {todos.map((todo, index) => (
              <li
                className={`px-4 py-3 bg-[#d2defe] duration-200 flex justify-between  ${
                  todo.status === 'complete' ? 'bg-stone-200' : ''
                }`}
                key={todo.id}
              >
                <div className="flex gap-3 text-lg">
                  <span>{index + 1}.</span>
                  <span
                    className={`font-overpass ${
                      todo.status === 'complete' ? 'line-through' : ''
                    }`}
                  >
                    {todo.todo}
                  </span>
                </div>

                <>
                  <label className="select-none container block relative cursor-pointer text-xl pl-8">
                    <input
                      className="absolute opacity-0 right-10 top-[2px] cursor-pointer"
                      type="checkbox"
                      checked={todo.status === 'complete'}
                      onChange={() => handleToggleTodoStatus(todo.id)}
                    />
                    <span className="h-5 w-5 checkmark absolute top-[2px] right-10 bg-gray-400"></span>
                  </label>
                  <button
                    className="text-red-600"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <PiTrashFill size={23} />
                  </button>
                </>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default TodoList;
