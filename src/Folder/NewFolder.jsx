import { useState } from "react";


const NewFolder=({handleInsertData,explorer})=>{
console.log(explorer);
    const[expand,setExpand]=useState(false);
    const[showInput,setShowInput]=useState(
        {
            visible:false,
            isFolder:null
        }
    )
    const handlePropogation=(e,isFolder)=>{
        e.stopPropagation();
         setExpand(true);
        setShowInput({
            visible:true,
            isFolder
        })
    }
      
const onAddFolder=(e)=>{
  if(e.keyCode===13 && e.target.value){
  handleInsertData(explorer.id,e.target.value,showInput.isFolder)
    setShowInput({...showInput ,visible:false});
  }
}

    if(explorer.isFolder){
    return(
        <div>
        
        <div className="folder" onClick={()=>setExpand(!expand)}><span>📁{explorer.name}</span>
         <div>
            <button onClick={(e)=>handlePropogation(e,true)}>Folder +</button>
            <button onClick={(e)=>handlePropogation(e,false)}>File +</button>
           </div>
        </div>
            
            <div style={{display:expand?"block":"none", paddingLeft:23}}>
             {
                showInput.visible && (
                    <div className="inputContainer">
                        <span>{showInput.isFolder?"📁":"📋"}</span>
                        <input
                        type="text" 
                        onKeyDown={onAddFolder}
                        onBlur={()=>setShowInput({...showInput,visible:false})}
                        className="input_coming" 
                            autoFocus
                        />
                    </div>
                )
             }
            {
                explorer.items.map((exp)=>{
                return(
              <span key={exp.id}><NewFolder handleInsertData={handleInsertData} explorer={exp}/></span>
               )
                })}
            </div>
        </div>
    )}else{
        return(
        <span className="file">📋{explorer.name}</span>
        )
    }
}
export default NewFolder;