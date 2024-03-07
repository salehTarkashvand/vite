import { useSignupForm } from "./hooks/useSignupForm";
import Input from "./components/input";
import { signUpFormInput } from "./constant/signup-form-input";

function App() {
  const { values,
     errors,
      handleChange,
       handleSubmit
     } = useSignupForm();
  return (
    <>
      <div>
        <form
          className="flex flex-col justify-center items-center w-screen h-screen"
          onSubmit={handleSubmit}
          noValidate
        >
          {signUpFormInput.map((props) => (
            <Input
              key={props.id}
              label={props.label}
              placeholder={props.placeholder}
              type={props.type}
              value={values[props.name]}
              name={props.name}
              onChange={handleChange}
              error={errors[props.name]}
            />
          ))}
          {/* <Input
            label="email"
            placeholder="email"
            type="text"
            value={values.email}
            name="email"
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="user name"
            placeholder="user name"
            type="text"
            value={values.userName}
            name="userName"
            onChange={handleChange}
            error={errors.userName}
          />
          <Input
            label="full name"
            placeholder="full name"
            type="text"
            value={values.fullName}
            name="fullName"
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            label="password"
            placeholder="password"
            type="password"
            value={values.password}
            name="password"
            onChange={handleChange}
            error={errors.password}
          /> */}
          <button type="submit" className="bg-slate-400 rounded p-1">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
