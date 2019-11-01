// The Model url must be the same in routers file

export const MODELS = [
  {
    name: "Users",
    feilds: [
      {
        type: "text",
        name: "username",
        placeholder: "User Name",
        requared: true,
        show:true,
        validate:false
      },
      {
        type: "text",
        name: "email",
        placeholder: "Email",
        requared: true,
        show:true,
        validate:'email'
      },

    ],
    url: "users"
  }
];
