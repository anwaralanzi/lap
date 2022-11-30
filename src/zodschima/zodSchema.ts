import { type } from "os";
import { z ,TypeOf} from "zod";

export const addTeacherSchema = z.object({
  body:z.object({
      id:z.string({required_error:'id is required'})
      .min(2,'id must be more than 2'),

      name:z.string({required_error:'name is required'})
      .min(3,'name must be more than 3'),
      
  })
})


export const getTeacherSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});

export type GetTeacherSchemaType = z.infer<
typeof getTeacherSchema
>['params'];


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

      export const registerSchema =z.object({
        body: z.object({
    
            username :z.string({required_error :"Username is required !"}).min(3),
            password: z.string({required_error :"password is required !"}).min(3),
            email: z.string({ required_error: 'email is required !' }).min(3),
    
        }),
    });
    export type registerSchemaType=TypeOf<typeof registerSchema >['body']

    export const loginSchema = z.object({
        body: z.object({
          username: z.string(),
          password: z.string(),
        }),
      });
      export type loginSchemaType=TypeOf<typeof loginSchema >['body']


