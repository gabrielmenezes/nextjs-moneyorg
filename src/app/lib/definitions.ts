
import { z } from 'zod'

export const loginFormSchema = z.object({
    username: z.string().email({ message: 'Insira um email valido!' }),
    password: z.string().min(8, { message: 'Minimo de 8 caracteres.' }),
});


export type LoginFormState =
    {
        errors?: {
            username?: string[] | undefined;
            password?: string[] | undefined;
        }
    } | undefined


export type SessionPayload = {
    username: string,
    expiresAt: Date,
}