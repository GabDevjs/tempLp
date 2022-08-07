import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { BsBellFill } from 'react-icons/bs'
import { ButtonBell, ButtonProfile, ItemsNavbar, LogoNavabar } from '../atoms'

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-b border-gray-800 border-opacity-20">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlinePlus className="block rotate-45 h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <LogoNavabar />
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <ItemsNavbar  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ButtonBell />

                <ButtonProfile />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1 flex flex-col items-center">
            <ItemsNavbar  />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}