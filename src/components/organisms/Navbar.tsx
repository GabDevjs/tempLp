import { Disclosure } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import AppContext from "../../services/context";
import { ButtonBell, ButtonProfile, ItemsNavbar, LogoNavabar } from "../atoms";

interface NavbarProps {
  children?: React.ReactNode;
  Login?: boolean;
}

export const Navbar = (props: NavbarProps) => {
  const { children, Login, ...rest } = props;
  const context = useContext(AppContext);

  const [navbarInfos, setNavbarInfos] = useState(null);
  const [itemsNavbar, setItemsNavbar] = useState(null);
  const [buttonsItems, setButtonsItems] = useState([]);

  useEffect(() => {
    if (context.infos) {
      setNavbarInfos(context.infos);
      setItemsNavbar(context.navbar.items);
      setButtonsItems(context.navbar.buttonsItems);
      console.log(buttonsItems);
    }
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow border-b border-gray-800 border-opacity-20"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between lg:justify-around">
                <LogoNavabar />
                <div
                  className="hidden sm:ml-6 sm:flex sm:space-x-8
                  md:space-x-10 lg:text-lg "
                >
                  <ItemsNavbar items={itemsNavbar} />
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8
                  md:space-x-10 lg:text-lg ">
                  {context.navbar.buttonsTogle && buttonsItems[0] !== undefined ? (
                    <>
                      {
                        buttonsItems?.map((item: any, index: any) => {
                          <span
                            key={index}
                            className="flex justify-center items-center h-full w-full py-2"
                          >
                            <a
                              href={item.to}
                              className="text-base px-11 font-medium hover:text-primary hover:scale-105 transition-all flex justify-between items-center"
                            >
                              
                              {item.name}
                            </a>
                          </span>;
                        })
                      }
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0  -0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlinePlus
                      className="block rotate-45 h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden h-full border-t">
            <div className="mt-3 flex flex-col items-center flex-auto pb-2">
              <ItemsNavbar />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
