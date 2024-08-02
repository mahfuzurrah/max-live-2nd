"use client"
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { userWaitingListValidation } from '@/lib/validations/auth';

interface WaitingListFormProps {
  callbackUrl: string;
}

const WaitingListForm = ({ callbackUrl }: WaitingListFormProps) => {
  const form = useForm<z.infer<typeof userWaitingListValidation>>({
    resolver: zodResolver(userWaitingListValidation),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof userWaitingListValidation>) => {
    const response = await fetch('/api/waitingList/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = data.redirect || callbackUrl;
    } else {
      alert(data.msg || 'Join waiting list failed');
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
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
            Join the waiting list
          </button>
        </div>
      </div>
    </form>
  );
};


export default WaitingListForm