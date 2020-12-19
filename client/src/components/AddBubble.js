import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from './../utils/axiosWithAuth';


const initialFormValues = {
    color: "",
    hex: ""
}

const AddBubble = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = evt => {
        const { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value});
    }

    const onSubmit = evt => {
        evt.preventDefault();
        const newMember = {
            color: formValues.color.trim(),
            code: {
                hex: formValues.hex.trim()
            }
        }
        console.log(newMember);

        axiosWithAuth()
            .post('/api/colors', newMember)
            .then((res)=>{
                props.updateColors(res.data);
                // props.history.push('/protected');
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                Add Circle
                <label>Color
                    <input
                        type="text"
                        name="color"
                        value={formValues.color}
                        onChange={onChange}
                        placeholder="color"
                        maxLength="30"
                        data-testid="colorInput"
                    />
                </label>
                <label>Hex Code
                    <input
                        type="text"
                        name="hex"
                        value={formValues.hex}
                        onChange={onChange}
                        placeholder="hex code"
                        maxLength="30"
                        data-testid="hexInput"
                    />
                </label>
                <div className='submit'>
                    <button data-testid="addCircle">submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddBubble;