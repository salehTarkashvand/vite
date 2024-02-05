const Input = ({ value, onChange, onKeyUp, placeholder, type ,inputRef}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className=" bg-slate-50 pl-3 flex-auto rounded-md shadow-lg "
        onChange={(e) => {return onChange(e.target.value)}}
        onKeyUp={(e) => {return onKeyUp(e)}}
        inputRef={inputRef}
      ></input>
    </>
  );
};

export default Input;
