import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

function TaskRow({ taskDescription, hasAttachments }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">

      <div className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-green-500 hover:cursor-pointer"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="ml-4">{taskDescription}</span>
      </div>

      <div className="flex items-center">
        <span className={`mr-4 ${isChecked ? 'text-green-500' : 'text-gray-500'}`}>
          {isChecked ? 'Done' : 'Pending'}
        </span>
        {hasAttachments && (
          <FontAwesomeIcon icon={faPaperclip} className="text-gray-500" />
        )}
      </div>
    </div>
  );
}

export default TaskRow;
