"use client"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { useFormStatus } from 'react-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { signIn } from "next-auth/react"
import { userSignInValidation } from "@/lib/validations/auth"

interface SignInFormProps {
    callbackUrl: string
  }
  
  const SignInForm = ({
    callbackUrl
  }: SignInFormProps) => {
    const { pending } = useFormStatus()
  
    const form = useForm<z.infer<typeof userSignInValidation>>({
      resolver: zodResolver(userSignInValidation),
      defaultValues: {
        email: "",
        password: ""
      }
    })
  
    async function onSubmit(values: z.infer<typeof userSignInValidation>) {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          callbackUrl,
        });
    }
  
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input 
              {...form.register("email")}
              id="email" 
              type="email" 
              className="form-input w-full text-gray-800" 
              placeholder="Entrez votre adresse email" 
              required 
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <div className="flex justify-between">
              <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Mot de passe</label>
              <Link title="Resetpassword" href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Des problèmes pour se connecter?</Link>
            </div>
            <input 
              {...form.register("password")}
              id="password" 
              type="password" 
              className="form-input w-full text-gray-800" 
              placeholder="Entrez votre mot de passe" 
              required 
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-600 ml-2">Rester connecté</span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Se connecter</button>
          </div>
        </div>
      </form>
  
  );
};

export default SignInForm