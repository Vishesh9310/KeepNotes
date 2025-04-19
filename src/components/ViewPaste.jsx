import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  
  return (
    <div>
      <div className='flex flex-row gap-7'>
        <input
          className='p-1 rounded-2xl bg-black mt-2 w-[66%] pl-4'
          type="text"
          placeholder='Enter title here'
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mt-8'>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] bg-black p-4'
          value={paste.content}
          placeholder='Enter content here'
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste