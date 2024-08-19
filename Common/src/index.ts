import zod from "zod"

export const signupInput = zod.object({
    username: zod.string().email({ message: "wrong email Zod Invalid" }),
    password: zod.string().min(5, { message: "password too short Zod" }),
    name: zod.string().optional(),
});


export const signinInput = zod.object({
    username: zod.string().email({ message: "wrong email Zod Invalid" }),
    password: zod.string().min(5, { message: "password too short Zod" }),
    name: zod.string().optional(),
});


export const createBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
})


export const updateBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
    id: zod.number(),
})

export type SignUpInput = zod.infer<typeof signupInput>;
export type SignInInput = zod.infer<typeof signupInput>;
export type CreateBlogInput = zod.infer<typeof createBlogInput>;
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;