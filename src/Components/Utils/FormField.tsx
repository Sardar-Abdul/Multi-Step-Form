import React, {FC} from 'react'
import TextField from '@material-ui/core/TextField'
import { ErrorMessage, Field } from 'formik'

interface FromFieldProps{
    name:string,
    label:string,
    type: string,
}

const FormField: FC<FromFieldProps> = ({name,label,type}) => {
    return (
        <div>
            <Field
                name={name}
                as={TextField}
                label={label}
                type={type}
                style={{margin:8 , width:'80%' }}
                variant="outlined"
                margin="normal"
                required
                helperText={<ErrorMessage  name={name} render={msg => (<div style={{color:'red'}} >{msg}</div>)} />}
            />
        </div>
    )
}

export default FormField