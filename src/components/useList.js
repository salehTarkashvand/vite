import { useState , useRef ,useEffect} from "react";
const useList =()=>{
    const [addItemValue, setItemValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [canAdd, setCanAdd] = useState(false);
    const inputRef = useRef(null);
    const [users, setUsers] = useState([
      { id: 1, name: "saleh", age: 24, make: "programming" },
      { id: 2, name: "hamed", age: 19, make: "programming" },
      { id: 3, name: "mahmod", age: 20, make: "programming" },
      { id: 4, name: "maryam", age: 18, make: "programming" },
    ]);
    const handleSearchInput = (value) => {
        const resultSearchValue = value;
        setSearchTerm(resultSearchValue);
      };
    
      const changeInputValue = (value) => {
        const resultValue = value;
        setItemValue(resultValue);
      };
      const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          addItem();
        }
      };
      const addItem = () => {
        // if(!inputValue) return
    
        setUsers([
          ...users,
          { id: users.length + 1, name: addItemValue, age: 20, make: "programing" },
        ]);
        setItemValue("");
        inputRef.current?.focus();
      };
    
      const change = () => {
        return setUsers([
          ...users,
          { id: users.length+1, name: "maman", age: 18, make: "programming" },
        ]);
      };
      useEffect(() => {
        console.log("mount");
        inputRef.current?.focus();
        return () => {
          console.log("update");
        };
      }, [users]);

     const toggleAddItem = () =>setCanAdd(!canAdd)

    return{addItemValue,
        addItem,
        searchTerm,
        canAdd,
        users,
        inputRef,
        handleSearchInput,
        changeInputValue,
        handleKeyPress,
        change ,
        toggleAddItem,
        setCanAdd,
        setUsers,}
}

export default useList ;