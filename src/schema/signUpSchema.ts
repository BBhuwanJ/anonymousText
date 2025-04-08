import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(10, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9._-]+$/
        , "Username must not contain special chatacter")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"invalid email address"}),
    password: z.string().min(6, {message: "Password shoud at least contail 6 characters"})
}) 


