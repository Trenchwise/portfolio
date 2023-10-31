const contactFormSchema = {
  name: joi.string().required().min(2),
  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } }),
  message: joi.string().required().min(30),
};
