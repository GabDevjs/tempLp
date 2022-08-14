import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { ItemsNavbar, LogoNavabar } from "../atoms";

interface FooterProps {
  SocialMediasList?: any;
}

const SocialMedia = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: <BsFacebook />,
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
    icon: <BsTwitter />
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: <BsInstagram />,
  },

]

export const Footer = (props: FooterProps) => {
  const { SocialMediasList, ...rest } = props;

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <LogoNavabar />
            <p className="text-gray-500 text-base">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              {SocialMedia.map((item) => (
                <a href={item.url} key={item.name} className="flex justify-center items-center hover:scale-110 transition-all">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                <ItemsNavbar />
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                <ItemsNavbar />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Workflow, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
