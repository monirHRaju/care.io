// app/login/page.jsx   or   components/LoginPage.jsx

'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { UserContext } from '@/context/user.context';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {user, setUser} = use(UserContext)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', { email, password });
      
      setIsLoading(false);
      // Here you would call your auth function
      // e.g. signInWithEmailAndPassword(auth, email, password)
      if(email === "admin@email.com" && password === "1234"){
        const currentUser = {email: email, username: email?.split('@')[0]};
        setUser(currentUser);
        console.log(currentUser ,"User logged in");
        alert("Login successful");
        router.push('/dashboard');
      } else {
        alert("Invalid credentials");
        setUser(null);
      }
    }, 1500);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Here you would call your Google auth provider
    // e.g. signInWithPopup(auth, googleProvider)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Welcome Back</h1>
            <p className="text-base-content/70">
              Log in to book your next car spa experience
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:ring-2 ring-primary/40 transition-all">
                <FaEnvelope className="text-base-content/60" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
                <Link href="/forgot-password" className="label-text-alt link link-hover text-primary">
                  Forgot password?
                </Link>
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:ring-2 ring-primary/40 transition-all">
                <FaLock className="text-base-content/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="grow"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-ghost btn-xs"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Logging in...
                </>
              ) : (
                'Log In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-8">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full gap-3 normal-case text-base"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          {/* Register link */}
          <div className="text-center mt-8">
            <p className="text-base-content/70">
              Do not have an account?{' '}
              <Link href="/register" className="link link-primary font-medium">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;