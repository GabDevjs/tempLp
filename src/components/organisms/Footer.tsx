import { LogoNavabar } from "../atoms";

interface FooterProps {
  SocialMediasList?: any;
}

export const Footer = (props: FooterProps) => {
  const { SocialMediasList, ...rest } = props;

  return (
    <footer className="bg-white " aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  list
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-8 xl:col-span-1">
            <LogoNavabar />
            <p className="text-gray-500 text-base">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {SocialMediasList &&
                SocialMediasList.map((item: any) => {
                  return (
                    <a
                      href={item.url}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <i className={item.icon}></i>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
