import React, { useState, useEffect, useRef } from "react";
import Input from "./components/input";
import Button from "./components/button";
import AddItem from "./components/addItem";
import List from "./components/list";
import useList from "./components/useList";

function App() {
  const {
    addItemValue,
    searchTerm,
    canAdd,
    users,
    inputRef,
    handleSearchInput,
    changeInputValue,
    handleKeyPress,
    change,
    addItem,
    toggleAddItem,
    setCanAdd,
  } = useList();
  // const [addItemValue, setItemValue] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [canAdd, setCanAdd] = useState(false);
  // const [users, setUsers] = useState([
  //   { id: 1, name: "saleh", age: 24, make: "programming" },
  //   { id: 2, name: "hamed", age: 19, make: "programming" },
  //   { id: 3, name: "mahmod", age: 20, make: "programming" },
  //   { id: 4, name: "maryam", age: 18, make: "programming" },
  // ]);
  // useEffect(() => {
  //   console.log("mount");
  //   inputRef.current?.focus();
  //   return () => {
  //     console.log("update");
  //   };
  // }, [users]);

  // const inputRef = useRef(null);

  // const User = ({ id, name, age, make }) => {
  //   return (
  //     <>
  //       <ul className="flex flex-row justify-center items-center ">
  //         <li
  //           onClick={change}
  //           className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1"
  //         >
  //           {id}
  //         </li>
  //         <li
  //           onClick={change}
  //           className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1"
  //         >
  //           {name}
  //         </li>
  //         <li
  //           onClick={change}
  //           className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1 "
  //         >
  //           {age}
  //         </li>
  //         <li
  //           onClick={change}
  //           className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1 "
  //         >
  //           {make}
  //         </li>
  //       </ul>
  //     </>
  //   );
  // };

  // const handleSearchInput = (value) => {
  //   const resultSearchValue = value;
  //   setSearchTerm(resultSearchValue);
  // };

  // const changeInputValue = (value) => {
  //   const resultValue = value;
  //   setItemValue(resultValue);
  // };
  // const handleKeyPress = (e) => {
  //   if (e.keyCode === 13) {
  //     addItem();
  //   }
  // };
  // const addItem = () => {
  //   // if(!inputValue) return

  //   setUsers([
  //     ...users,
  //     { id: users.length + 1, name: addItemValue, age: 20, make: "programing" },
  //   ]);
  //   console.log(users);
  //   setItemValue("");
  //   //inputRef.current?.focus();
  // };

  // const change = () => {
  //   setUsers([
  //     ...users,
  //     { id: 5, name: "maman", age: 18, make: "programming" },
  //   ]);
  // };

  return (
    <div className="bg-slate-200 p-4 rounded-lg m-10 shadow-lg">
      <div className="flex justify-between gap-5 content-center m-4 ">
        <Button
          onClick={() => {
            setCanAdd(toggleAddItem);
          }}
          className="bg-slate-50  p-2 rounded-lg shadow-lg  "
        >
          + add new item
        </Button>

        <Input
          type="text"
          placeholder="search ..."
          inputRef={inputRef}
          onChange={handleSearchInput}
        />
      </div>
      {canAdd && (
        <AddItem
          addItemValue={addItemValue}
          changeInputValue={changeInputValue}
          handleKeyPress={handleKeyPress}
          addItem={addItem}
          disabled={!addItemValue}
        />
      )}
      <List data={users} searchTerm={searchTerm} change={change}></List>
    </div>
  );
}

export default App;
