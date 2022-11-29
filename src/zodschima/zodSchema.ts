import { z } from "zod";

export const getallbooksScemah =z.object({
    body:z.object({
        name: z
        .string({ required_error: "name is required !" })
        .min(2, "name must be more than 2 Chars"),
      genre: z
        .string({ required_error: "genre is required !" })
        .min(2, "genre must be more than 2 Chars"),
    }),


    });
    export const getalUsersScemah =z.object({
      body:z.object({
          username: z
          .string({ required_error: "name is required !" })
          .min(2, "usernam must be more than 2 Chars"),
        passowrd: z
          .string({ required_error: "genre is required !" })
          .min(2, "passowrd must be more than 2 Chars"),
      }),
  
  
      });
      export const getallLoonsSchema =z.object({
      body:z.object({

        book_id: z.string({ required_error: "book id is required !" }),
    user_id: z.string({ required_error: "user id is required !" }),
      }),
  
  
      });
