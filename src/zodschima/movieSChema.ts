import {z,TypeOf} from "zod";
export const movieSChema=z.object({
body:z.object({
    
name:z
.string({ required_error:`name is required`})
.min(3, `name must be greter than 4 charts !`),
genre:z
.enum(['Drama', 'Action', 'Comedy']),
rating:z
.number({ required_error: 'rating is required !' })
.min(1, "rating must be greater than 1 numbers")
.max(5, "rating must be less than   5 numbers"),
duration: z
.number({ required_error: 'duration is required !' })
.multipleOf(60)
.min(1, "id must be more than 60"),


})

})
export type movieSChemaType = TypeOf<typeof movieSChema>['body']