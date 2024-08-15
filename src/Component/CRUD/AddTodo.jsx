

import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useState } from 'react'

const AddTodo = () => {

const [item, setItem] = useState([])
const [newItem, setNewItem] = useState('')


const handleAdd=()=>{
if(newItem.trim()){
    setItem([...item,newItem])
    setNewItem('');
}
}


const handleDelete =(index)=>{
    const upDatedItem =item.filter((item,i)=>i!=index)
    setItem(upDatedItem)
}



  return (
    <>

       <div className='container'>
<div className='row'>
    <div className='card col-5 m-auto mt-5 bg-primary'>
<h1 className='text-light mt-2'>Food Cook Planner</h1>
<div className='d-flex mb-3 m-auto '>
<input type="text" value={newItem} onChange={(e)=> setNewItem(e.target.value)} name="" id="" className='me-2' />
<button type="button" onClick={handleAdd} class="btn btn-success">Add</button>
</div>
    </div>
    </div>

    <div className="row">
  <div className="card col-5 m-auto mt-5 bg-dark">
    <h4 className="text-light mt-3">You have added {item.length}  item(s)</h4>
    <div className="container flex-column m-auto">
    {item.map((item, index) => (
      <div className="col-12 d-flex align-items-center justify-content-between card mt-2 mb-3">
        <p className="mb-0">{item}</p>
        <FontAwesomeIcon icon={faDeleteLeft} onClick={()=>handleDelete(index)} className="mt-0" />
           
      </div>
       ))}
    </div>
  </div>
</div>


       </div>




    </>
  )
}

export default AddTodo
























// import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';

// const AddTodo = () => {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editingValue, setEditingValue] = useState('');

//   const handleAddItem = () => {
//     if (newItem.trim()) {
//       setItems([...items, newItem]);
//       setNewItem('');
//     }
//   };

//   const handleDeleteItem = (index) => {
//     const updatedItems = items.filter((item, i) => i !== index);
//     setItems(updatedItems);
//   };

//   const handleEditItem = (index) => {
//     setEditingIndex(index);
//     setEditingValue(items[index]);
//   };

//   const handleSaveEdit = () => {
//     const updatedItems = items.map((item, index) => (index === editingIndex ? editingValue : item));
//     setItems(updatedItems);
//     setEditingIndex(null);
//     setEditingValue('');
//   };

//   const handleCancelEdit = () => {
//     setEditingIndex(null);
//     setEditingValue('');
//   };

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='card col-5 m-auto mt-5 bg-primary'>
//           <h1 className='text-light mt-2'>Food Cook Planner</h1>
//           <div className='d-flex mb-3 m-auto'>
//             <input
//               type='text'
//               value={newItem}
//               onChange={(e) => setNewItem(e.target.value)}
//               className='me-2'
//             />
//             <button type='button' className='btn btn-success' onClick={handleAddItem}>
//               Add
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className='row'>
//         <div className='card col-5 m-auto mt-5 bg-dark'>
//           <h4 className='text-light mt-3'>You have added {items.length} item(s)</h4>
//           <div className='container flex-column m-auto'>
//             {items.map((item, index) => (
//               <div key={index} className='col-12 d-flex align-items-center justify-content-between card mt-2 mb-3'>
//                 {editingIndex === index ? (
//                   <>
//                     <input
//                       type='text'
//                       value={editingValue}
//                       onChange={(e) => setEditingValue(e.target.value)}
//                       className='me-2'
//                     />
//                     <button type='button' className='btn btn-success' onClick={handleSaveEdit}>
//                       Save
//                     </button>
//                     <button type='button' className='btn btn-secondary' onClick={handleCancelEdit}>
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <p className='mb-0'>{item}</p>
//                     <div>
//                       <FontAwesomeIcon icon={faEdit} className='me-2' onClick={() => handleEditItem(index)} />
//                       <FontAwesomeIcon icon={faDeleteLeft} className='mt-0' onClick={() => handleDeleteItem(index)} />
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTodo;
