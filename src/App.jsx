import React ,{useState , useEffect, useRef} from "react"

function App() {
  const [inputValue,setInputValue]=useState('')
  const [users,setUsers] =useState([
    {id:1 , name:'saleh',age:24 , make:'programming'},
    {id:2 ,name:'hamed',age:19 , make:'programming'},
    {id:3 ,name:'mahmod',age:20 , make:'programming'},
    {id:4 ,name:'maryam',age:18 , make:'programming'}
  ])
  useEffect(()=>{
    console.log("mount");
  return(()=>{
    console.log("update");
  })
  },[users])

  const inputRef = useRef(null)

  const User = ({id , name , age , make})=>{
   return(
    <li onClick={change}>
    {id}-{name}-{age}-{make}
    </li>
   )
  }
  
  const changeInputValue = ({target})=>{
    const resultValue = target.value;
    setInputValue(resultValue)

  }
  const handleKeyPress =(e)=>{
   if(e.keyCode === 13 ){
    addItem()
   }
  }
  const addItem = ()=>{
    // if(!inputValue) return
    
    setUsers([
      ...users,
      {id:users.length+1 , name:inputValue , age:20 , make:"programing"}
    ])
    console.log(users);
    setInputValue('')
    inputRef.current.focus()

  } 
  
  
  const change = ()=>{
    setUsers([...users , {id:5 ,name:'maman',age:18 , make:'programming'} ])
  }
  return (
  <div>
    <input value={inputValue} onChange={changeInputValue} onKeyUp={handleKeyPress} ref={inputRef} ></input>
    <button onClick={addItem} disabled={!(inputValue)} >
      add
    </button>
    <ul>
      {users.map(({id , name , age , make})=>{
       return (
      //  <li key={id} onClick={change}>
      //   {id}-{name}-{age}-{make}
      //   </li>
       
       <User key={id} id={id} onClick={change} name={name} age={age} make={make} />
       )
      })}
    </ul>
  </div>
  
  )
}

export default App
