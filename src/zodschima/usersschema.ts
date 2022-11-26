import {z,TypeOf} from "zod";
export const usersSChema=z.object({
body:z.object({
    
    username:z
.string({ required_error:`username is required`})
.min(3, `username must be greter than 4 charts !`),

password:z
.number({ required_error: 'password is required !' })
.min(1, "rating must be greater than 1 numbers"),

joiningYear:z
.string({ required_error:`joiningYear:z
is required`}),
age:z
.number({ required_error: 'age is required !' }),
role:z
.enum(['Admin', 'user']),




})

})
export type usersSChemaType = TypeOf<typeof usersSChema>['body'];



