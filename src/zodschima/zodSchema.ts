import { type } from "os";
import { z ,TypeOf} from "zod";

export const getallTeacherScemah =z.object({
    body:z.object({
        name: z
        .string({ required_error: "name is required !" })
        .min(2, "name must be more than 2 Chars"),
  
    }),


    });
    export type getallTeacherScemahType=TypeOf<typeof getallTeacherScemah >['body']
    export const getallStudentScemah =z.object({
      body:z.object({
          name: z
          .string({ required_error: " student name is required !" })
          .min(2, "usernam must be more than 2 Chars"),
          major: z
          .string({ required_error: "genre is required !" })
          .min(2, "passowrd must be more than 2 Chars"),
          age:z
          .number({required_error:"age is required !"}),
      }),
  

      });
      export type getallStudentScemahType=TypeOf<typeof getallStudentScemah >['body']

      export const getallClassSchema =z.object({
      body:z.object({
        name:z
        .string({required_error:'class name is required'}),

      }),
  
  
      });
      export type getallClassSchemaType=TypeOf<typeof getallClassSchema >['body']

