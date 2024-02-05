const User = ({ id, name, age, make, change }) => {
  return (
    <>
      <ul className="flex flex-row justify-center items-center ">
        <li
          onClick={change}
          className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1"
        >
          {id}
        </li>
        <li
          onClick={change}
          className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1"
        >
          {name}
        </li>
        <li
          onClick={change}
          className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1 "
        >
          {age}
        </li>
        <li
          onClick={change}
          className="bg-slate-100 m-3 p-2 text-lg rounded-lg shadow-lg flex-1 "
        >
          {make}
        </li>
      </ul>
    </>
  );
};
export default User;
