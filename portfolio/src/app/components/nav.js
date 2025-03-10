'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ChartBarSquareIcon,
  HomeModernIcon,
  ArrowTrendingUpIcon,
  Bars3Icon,
  XMarkIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const projects = [
  { name: 'FRED Data Pipeline', description: 'Economic indicator data pipeline', href: '#financial-indicators-pipeline', icon: ArrowTrendingUpIcon },
  { name: 'Apache Superset', description: 'Data Visualization and Data Exploration Platform', href: '#superset', icon: ChartBarSquareIcon },
  { name: 'Lucky Parking', description: 'LA parking citation analysis web app', href: '#lucky', icon: TicketIcon },
  { name: 'Haus', description: 'Real estate marketplace web app', href: '#haus', icon: HomeModernIcon },
  { name: 'Harmonious Voices', description: 'Messaging web app', href: '#harmonious', icon: ChatBubbleOvalLeftEllipsisIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  let closeTimer;

  const handleMouseEnter = () => {
    clearTimeout(closeTimer);
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setProjectsOpen(false);
    }, 100);
  };

  const handleMobileMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-black fixed top-0 w-full z-50 border-b border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Edgar Ulloa</span>
            <span className="text-xl font-semibold leading-6 text-white hover:text-gray-300 transition-colors">Edgar Ulloa</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          <a
            href="#about"
            className="text-md font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#about');
              if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth',
                });
              }
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-md font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#skills');
              if (target) {
                const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight; // Calculate the adjusted scroll position
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth',
                });
              }
            }}
          >
            Skills
          </a>
          <Popover as="div" className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Popover.Button
              className="flex items-center gap-x-1 text-md font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                if (!isProjectsOpen) {
                  const target = document.querySelector('#projects-section');
                  if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth',
                    });
                  }
                } else {
                    setProjectsOpen(!isProjectsOpen)
                }
              }}
            >
              Projects
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>
            <Transition as={Fragment} show={isProjectsOpen} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {projects.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                          setProjectsOpen(false); // Close dropdown
                        }
                      }}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-black" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <span className="block font-semibold text-gray-900">{item.name}</span>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" className="text-md font-semibold leading-6 text-white hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Edgar Ulloa</span>
              <span className="text-xl font-semibold leading-7 text-black">Edgar Ulloa</span>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors" onClick={handleMobileMenuItemClick}>About</a>
                <a href="#skills" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors" onClick={handleMobileMenuItemClick}>Skills</a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">
                        Projects
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...projects].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                            onClick={handleMobileMenuItemClick}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a href="#contact" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors" onClick={handleMobileMenuItemClick}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
