import {z,TypeOf} from "zod";
export const parkSchema=z.object({
body:z.object({
    id:z
    .string({required_error:`id is required`})
    .min(2, "id must be greter than 2 charts !"),
name:z
.string({ required_error:`name is required`})
.min(4, `name must be greter than 4 charts !`),
type:z
.enum(['rollercoaster', 'thriller', 'water']),
ticket:z
.number({ required_error: 'number is required !' }),
price: z
        .number({required_error: 'Price is required !'}),


})

})
export type parkSchemaType = TypeOf<typeof parkSchema>['body'];