'use server';

import { LoginFormState, loginFormSchema } from "@/app/lib/definitions";
import { createSession, deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function singin(state: LoginFormState, formData: FormData) {

    const validatedFields = loginFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    await createSession(validatedFields.data.username)
    redirect('/dashboard')
}


export async function logout() {
    deleteSession()
    redirect('/')
}