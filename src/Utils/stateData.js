import uniqId from "uniqid";

const experiences = [
  {
    id: uniqId(),
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  },
];

const educations = [
  {
    id: uniqId(),
    university: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  },
];

const personalInformation = {
  firstName: "",
  lastName: "",
  title: "",
  address: "",
  phone: "",
  email: "",
  description: "",
};

export { experiences, educations, personalInformation };
