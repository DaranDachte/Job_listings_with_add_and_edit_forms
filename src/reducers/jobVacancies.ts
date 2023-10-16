//state приходит из стора, экшн приходит из диспатч
import { makeid5 } from "../Helpers/MakeId";
import photosnap from "../assets/img/photosnap.svg";
import manage from "../assets/img/manage.svg";
import eyecam from "../assets/img/eyecam.svg";
import account from "../assets/img/account.svg";
import faceit from "../assets/img/faceit.svg";
import insure from "../assets/img/insure.svg";
import loop from "../assets/img/loopStudios.svg";
import myHome from "../assets/img/myhome.svg";
import shortly from "../assets/img/shortly.svg";
import airFilter from "../assets/img/airFilter.svg";
//function getImgUrl(name) {
// return new URL(`../assets/img/${name}.svg`, import.meta.url).href;}
//console.log(getImgUrl("photosnap"));

const initialState = [
  {
    id: makeid5(),
    companyName: "Photosnap",
    vacancyName: "FullStack Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "USA only",
    logo: photosnap,
    labels: ["New", "Featured"],
    tags: ["Frontend", "Senior", "Html", "Css", "JavaScript"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "Manage",
    vacancyName: "Senior Frontend Developer",
    publishingDate: Date.now(),
    employmentType: "Part Time",
    location: "Remote",
    logo: manage,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Python", "React", "TypeScript"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },

  {
    id: makeid5(),
    companyName: "Eyecam",
    vacancyName: "Backend Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Germany",
    logo: eyecam,
    labels: ["New", "Featured"],
    tags: ["Backend", "Python", "MongoDB", "JavaScript"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "Account",
    vacancyName: "Junior Web Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: account,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "Faceit",
    vacancyName: "Web Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: faceit,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Middle", "React", "TypeScript"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "Insure",
    vacancyName: "Software Engineer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: insure,
    labels: ["New", "Featured"],
    tags: ["Backend", "Midweight", "JavaScript", "Sass", "Ruby"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "Loop",
    vacancyName: "Junior Backend Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "United Kingdom",
    logo: loop,
    labels: ["New", "Featured"],
    tags: ["Backend", "Ror", "Sass", "Ruby"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "myHome",
    vacancyName: "Junior  Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "United Kingdom",
    logo: myHome,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript", "MongoDB"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "Shortly",
    vacancyName: "Junior  Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "EU only",
    logo: shortly,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript", "MongoDB"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
  {
    id: makeid5(),
    companyName: "Air Filter",
    vacancyName: "Junior  Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: airFilter,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript", "MongoDB"],
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
  },
];

const jobVacanciesReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_JOB_VACANCY":
      return [...state, payload];
    //редюсер всегда возвращает новый стейт

    case "REMOVE_JOB_VACANCY":
      return state.filter((vacancy) => vacancy.id !== action.payload);

    default:
      return state;
  }
};

export default jobVacanciesReducers;
