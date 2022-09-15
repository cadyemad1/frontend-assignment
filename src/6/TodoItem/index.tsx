import * as Types from '../Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import './index.less';

const TodoItem = ({title,onCheck,status,onDelete}:any) =>{
    return(
        <div id='item-wrapper'>
      
      <div className='todo-details'>
            <input checked={status === 'Done'} type="checkbox" onChange={onCheck} />
            <p>{title}</p>
        </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTrash} onClick={onDelete}  />
            </div>
        </div>
    )
}

export default TodoItem;