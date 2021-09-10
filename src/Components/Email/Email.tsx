import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormField from '../Utils/FormField';
import Button from '@material-ui/core/Button'
import '../index.css'

interface EmailForm {
  userName?: string;
  email?: string;
  password?: string;
}



const Email = ({submit,prevValues,setFormValues} : any) => {

      
      const emailValidationSchema = Yup.object({
        userName: Yup.string()
          .required("Required"),
        email: Yup.string().email().required("Provide a valid Email address"),
        password: Yup.string()
          .required("Required")
          .max(15, "Should not be greated than 15 characters")
          .min(5, "Should not be less than 5 characters"),
      });
      
      const emailOnSubmit = (values: EmailForm) : void => {
          submit(1)
          setFormValues({...prevValues,...values})
      }
    return(
        <div className="email-from" >
<Formik
    initialValues={prevValues}
    validationSchema={emailValidationSchema}
    onSubmit={emailOnSubmit}
    
>
    {
        (props) => {
            return (
                <Form>
                    <FormField name="userName" label="User Name" type="text" />
                    <FormField name="email" label="Email Address" type="text" />
                    <FormField name="password" label="Password" type="password" />
                    <div className="buttonGroup">
                        <Button disabled variant="contained" color="secondary"  >Back</Button>
                        <Button variant="contained" color="primary" type='submit'  >Next</Button>
                    </div>

                </Form>
            )
        }
    }
</Formik>
</div>
    )
};

export default Email;