import { useFormik } from "formik";
import { object, string, number, date} from 'yup';

const emailRegex =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex ="^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
;
let formSchema = object({
    fullName: 
    string()
    .required(),
    password: 
    string()
    .required('Please Enter your password')
    .matches(passwordRegex,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    email: 
    string()
    .required()
    .email(),
    userName: string()
    .required()
    .nullable(),
  });
const initialValues = {
    fullName : "",
    email:"",
    userName : "",
    password : ""
} 
export const useSignupForm = () =>{
    const formik = useFormik({ 
        initialValues,
        validationSchema:formSchema,
          onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }
    })
    console.log(formik);
    return {
        values : formik.values,
        errors : formik.errors,
        handleChange : formik.handleChange,
        handleSubmit : formik.handleSubmit
    }
}