import Input from "./input";
import Button from "./button";
import useList from "./useList";

const AddItem = ({
  addItemValue,
  changeInputValue,
  handleKeyPress,
  addItem,
  inputRef,
}) => {
    
  return (
    <>
      <div className="bg-slate-200 p-4 flex gap-5 ">
        <Input
          type="text"
          value={addItemValue}
          onChange={changeInputValue}
          onKeyUp={handleKeyPress}
          placeholder="some name ..."
          inputRef={inputRef}
        />
        <Button onClick={addItem} disabled={!addItemValue}>
          add
        </Button>
      </div>
    </>
  );
};
export default AddItem;
