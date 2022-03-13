import React from 'react';
import { IformInput } from '../../interfaces/input.interface';

const FormInput: React.FC<IformInput> = ({ type, label }) => {
    return (
        <section>
            <label>{label}</label>
            <input type={type}></input>
        </section>
    );
};

export default FormInput;
