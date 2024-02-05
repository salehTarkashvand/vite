import User from "./user";

// const List = ({data,searchTerm,setUsers}) => {
//     const change = () => {
//         setUsers([
//           ...users,
//           { id: 5, name: "maman", age: 18, make: "programming" },
//         ]);
//       };
//   return (
//     <>
//       <ul>
//         {data
//           .filter(({ name }) => name.includes(searchTerm))
//           .map(({ id, name, age, make }) => {
//             return (
//               //  <li key={id} onClick={change}>
//               //   {id}-{name}-{age}-{make}
//               //   </li>

//               <User
//                 key={id}
//                 id={id}
//                 change={change}
//                 name={name}
//                 age={age}
//                 make={make}
//               />
//             );
//           })}
//       </ul>
//     </>
//   );
// };
const List = ({ data, searchTerm ,change}) => {

  const renderUser = ({ id, name, age, make }) => (
    // Assuming `User` is a component that renders user details
    <User key={id} id={id} name={name} age={age} make={make} change={change} />
  );
  const renderUsers = (data, searchTerm) => {
    const filteredUsers = data.filter(({ name }) => name.includes(searchTerm));
    return filteredUsers.map(renderUser);
  };

  return <ul>{renderUsers(data, searchTerm)}</ul>;
};

export default List;
