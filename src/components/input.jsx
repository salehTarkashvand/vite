const Input = ({ value, onChange, onKeyUp, placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className=" bg-slate-50 pl-3 flex-auto rounded-md shadow-lg "
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={(e) => onKeyUp(e)}
      ></input>
    </>
  );
};

export default Input;
