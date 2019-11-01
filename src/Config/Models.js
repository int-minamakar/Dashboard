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
  },
  {
    name: "Events",
    feilds: [
      {
        type: "text",
        name: "title",
        placeholder: "Title",
        requared: true,
        show:true,
        validate:false
      },
      {
        type: "textarea",
        name: "description",
        placeholder: "Description",
        requared: false,
        show:false,
        validate:false
      },
      {
        type: "date",
        name: "startdate",
        placeholder: "",
        requared: true,
        show:true,
        validate:false
      },

    ],
    url: "events"
  }
];
