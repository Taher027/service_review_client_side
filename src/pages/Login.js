import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { login, signInWithGoogle } = useContext(AuthContext);
    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(res => {
                const user = res.user;
            })
            .catch(error => console.error(error))
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(userCredential => {
                const user = userCredential.user;
            })
            .then(error => console.log(error));
        form.reset()

    }
    return (
        <div className="hero w-full my-20 text-white">
            <div className="hero-content ">
                <div className="card  w-full  shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to ArtSnap? please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <Link to={'/review'} className='flex justify-center' ><button onClick={handleGoogleSingIn} className='btn btn-primary '>Login With Google</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Login;