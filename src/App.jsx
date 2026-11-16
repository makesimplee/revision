import { useState } from "react";
import explorer from "./Data/FolderData";
import NewFolder from "./Folder/NewFolder";
import useCustomHook from "./hooks/CustomHook";

const App=()=>{
  const[explorerData,setExplorerData]=useState(explorer);
  console.log(explorerData);

  const {insertNode}=useCustomHook();

  const handleInsertData=(folderId,item,isFolder)=>{
    const finalTree=insertNode(explorerData,folderId,item,isFolder);
       setExplorerData(finalTree);
  };



  return(
    <>
<NewFolder handleInsertData={handleInsertData} explorer={explorerData}/>
      
    </>
  )
}
export default App;