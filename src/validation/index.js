import joi from "joi";
import { contactFormSchema, searchSchema } from "./schemas";

export const validate = async (payload, type) => {
  let r;
  switch (type) {
    case "search":
      r;
    case "search":
      r = joi.object(searchSchema);
      //call joi

      break;
    case "contactForm":
      //call joi
      r = joi.object(contactFormSchema);
      break;
    default:
      break;
  }

  try {
    const results = await r.validateAsync(payload);
    return null;
  } catch (errors) {
    const errorsMod = {};
    errors.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
    });

    // console.log(errorsMod);
    return errorsMod;
  }
};
