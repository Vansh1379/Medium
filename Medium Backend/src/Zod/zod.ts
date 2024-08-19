import {z} from 'zod'

export const signupInput = z.object({
    username: z.string().email({message: "Worng usename hai bhai"}),
    password: z.string().min(6, {message: "minimum 6 letters ka hona chaiye password chu"}),
    name: z.string().optional(),
})

export type SignupInput = z.infer<typeof signupInput>