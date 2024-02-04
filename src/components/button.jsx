const Button = ({ children , ...props }) => {
  return (
    <>
      <button
      className="bg-slate-50  p-2 rounded-lg shadow-lg w-20 h-10  "
      {...props}
      >
        {children}
      </button>
    </>
  )
};

export default Button;
