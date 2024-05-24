"use client"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { useFormStatus } from 'react-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { userSignUpValidation } from "@/lib/validations/auth"
import { signUpWithCredentials } from "@/lib/actions/auth.actions";

interface SignUpFormProps {
    callbackUrl: string
  }
  
  const SignUpForm = ({
    callbackUrl
  }: SignUpFormProps) => {
    const { pending } = useFormStatus()
  
    const form = useForm<z.infer<typeof userSignUpValidation>>({
      resolver: zodResolver(userSignUpValidation),
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    })
  
    async function onSubmit(values: z.infer<typeof userSignUpValidation>) {
      const user = await signUpWithCredentials({ email: values.email, password: values.password, name: values.name })
    }
  
    return (
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Nom <span className="text-red-600">*</span></label>
                  <input {...form.register("name")} id="name" type="text" className="form-input w-full text-gray-800" placeholder="Entrez votre nom" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input {...form.register("email")} id="email" type="email" className="form-input w-full text-gray-800" placeholder="Entrez votre email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Mot de passe <span className="text-red-600">*</span></label>
                  <input {...form.register("password")} id="password" type="password" className="form-input w-full text-gray-800" placeholder="Entrez votre mot de passe" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Confirmer le mot de passe <span className="text-red-600">*</span></label>
                  <input {...form.register("confirmPassword")} id="confirmPassword" type="password" className="form-input w-full text-gray-800" placeholder="Confirmez votre mot de passe" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">S'enregistrer</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                En créant un compte, vous acceptez les <a title="Terms" className="underline" href="#0">termes & conditions</a>, et notre <a title="Privacypolicy" className="underline" href="#0">Politique de Confidentialité</a>.
              </div>
      </form>
  );
};

export default SignUpForm