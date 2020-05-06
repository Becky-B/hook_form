import React,  { useState } from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;

    const createUser = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    return(
        <form onSubmit={createUser}>
            <div>
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" name="firstname" onChange= { createUser } />
            </div>
            <div>
                <label htmlFor="lastname">Lastname: </label>
                <input type="text" name ="lastname" onChange= { createUser} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange= { createUser } />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange= { createUser} />
            </div>
            <div>
                <label htmlFor="confirm">Comfirm Pasword: </label>
                <input type="password" name="confirm" onChange= { createUser} />
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
};
export default UserForm;