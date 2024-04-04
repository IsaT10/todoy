import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Features/Todo/todoSlice';

const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  // handle by enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };
  return (
    <>
      <h2 className="text-lg font-semibold ">Add Todo</h2>
      <div className="flex justify-between items-center mb-10 gap-5">
        <input
          className=" outline-2 outline-stone-300 border-2 rounded-sm border-stone-300 pl-3 py-2 flex-1"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Todo . . ."
        />
        <button
          className="bg-primaryColor text-white font-semibold rounded-sm px-6 py-2"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
