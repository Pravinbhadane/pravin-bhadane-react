import {Link} from "react-router-dom"
import {useState} from "react";


export default function Department(){
const [inputValue, setInputValue] = useState('');
const [gridData, setGridData] = useState([]);
const [edit, setEdit] = useState(null);

const HandleInput=(e)=>{
    setInputValue(e.target.value)
}


const HandleSave = ()=>{
    if(inputValue.trim() !== ""){
        if(edit !== null){
            const updatedGridData = [...gridData];
            updatedGridData[edit] = inputValue;
            setGridData(updatedGridData)
            setEdit(null)
        }
        else {
            setGridData([...gridData, inputValue])
        }
        setInputValue('')
    }
}


const HandleEdit= (index) => {
    setInputValue(gridData[index]);
    setEdit(index)
}

return (


<>
<h1>Department component</h1>

<input type="text"
value={inputValue}
onChange={HandleInput}
placeHolder="Enter Department Name"
></input>

<button  onClick={HandleSave}>
{edit !== null ? "Update" : "Save"}
</button>

<div>

<ul>{gridData.map((item, index)=> (
    <li key={index} ><span>{item}</span>
    <button onClick={()=> HandleEdit(index)}>Edit</button>
    </li>
))}
</ul>
</div>





<Link to="/Employee">Employee</Link>
</>
)

 }