import React from 'react'

const ArchiveCatatan=({id,onArchive})=>{
return <button className='contact-item_delete' onClick={()=>{onArchive(id)}}>ARC</button>
}

export default ArchiveCatatan;