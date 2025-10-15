import React, { useState } from 'react';
import {createUserWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.init';
import { Eye, EyeOff } from 'lucide-react';

const Registration = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPass, setShowPass] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Register Submitted', 'Email:'+ email, 'Pass:'+ password);

        // const passPattern = /^.{6,}$/
        // const passTowPattern = /^(?=.*[A-Z])(?=.*[a-z]).+$/
        // if(!passPattern.test(password)){
        //     setError('Pass must be 6 cherecter or longer');
        //     return;
        // }
        // else if(!passTowPattern.test(password)){
        //     setError('at least one uppercase letter and at least one lowercase letter');
        //     return;
        // }
        // const specialCharPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
        // if (!specialCharPattern.test(password)) {
        //     setError('Password must include at least one special character (e.g. !, @, #, $, %)');
        //     return;
        // }

        const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!passPattern.test(password)) {
            setError('Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, and one special character (e.g. !, @, #, $, %)');
            return;
        }


        setError('');
        setSuccess(false);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log('after result:',result.user)
                setSuccess(true);
                e.target.reset();
            })
            .catch(error => {
                // console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className='container'>
            <div className='py-[70px] flex flex-col items-center'>
                <div className='max-w-[420px] w-full'>
                    <h1 className="text-5xl font-bold py-5 text-center">Register now</h1>
                    <div className="card bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input w-full" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                    <div className='relative'>
                                        <input type={showPass ? 'text' : 'password'} className="input w-full" name='password' placeholder="Password" />
                                        <span onClick={()=> setShowPass(!showPass)} className='absolute top-2 right-3 cursor-pointer'>{showPass ? <EyeOff /> : <Eye />}</span>
                                    </div>
                                    <div>
                                        <a className="link link-hover">Forgot password?</a>
                                    </div>
                                    <label className="label">
                                        <input type="checkbox" name='checkbox' className="checkbox" />
                                        Accept our terms & condition.
                                    </label>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                                {
                                    success && <p className='text-green-500'>Registration Successful!</p>
                                }
                                {
                                    error && <p className='text-red-600'>{error}</p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;