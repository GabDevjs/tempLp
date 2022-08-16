import { AiOutlineHome } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import ImageLogo from "../assets/150.png"

export const ConfigPage = {
  infos: {
    name: "exmplo",
    logo: {ImageLogo},
    eslogan: "exmplo",
    description: "exmplo",
  },
  social: [
    {
      name: "facebook",
      url: "https://www.facebook.com/",
    },
    {
      name: "twitter",
      url: "https://www.twitter.com/",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/",
    },
  ],
  navbar: {
    items: [
      {
        name: "Home",
        to: "/",
        icon: <AiOutlineHome />,
      },
      {
        name: "About",
        to: "/",
        icon: <BsFillJournalBookmarkFill />,
      },
    ],
    buttonsTogle: true,
    buttonsItems: [
        {
            name: "Login",
            to: "/login",
            icon: <AiOutlineHome />,
        },
    ]
  },
};
