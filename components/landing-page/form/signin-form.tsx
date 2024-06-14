"use client"
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSignInValidation } from '@/lib/validations/auth';

interface SignInFormProps {
  callbackUrl: string;
}

const SignInForm = ({ callbackUrl }: SignInFormProps) => {
  const form = useForm<z.infer<typeof userSignInValidation>>({
    resolver: zodResolver(userSignInValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof userSignInValidation>) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      Cookies.set('token', data.token, { expires: 7 });
      window.location.href = data.redirect || callbackUrl;
    } else {
      alert(data.msg || 'Authentication failed');
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            {...form.register('email')}
            id="email"
            type="email"
            className="form-input w-full text-gray-800"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <div className="flex justify-between">
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <Link title="Reset password" href="/waiting-list" className="text-sm font-medium text-blue-600 hover:underline">
              Problems logging in?
            </Link>
          </div>
          <input
            {...form.register('password')}
            id="password"
            type="password"
            className="form-input w-full text-gray-800"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-600 ml-2">Stay connected</span>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
            Log in
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
