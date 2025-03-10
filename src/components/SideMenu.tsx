'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import loginCircle from '../../public/loginCircle.svg';
import freeCredit from '../../public/free-credit-icon.png';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function SideMenu({ isOpen, onClose, onLoginClick, onSignupClick }: SideMenuProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                  <div className="flex h-full flex-col overflow-y-auto bg-fuchsia-950/95 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-center justify-end">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-white"
                          onClick={onClose}
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Auth Buttons */}
                      <div className="space-y-4">
                        <button
                          onClick={() => {
                            onClose();
                            onLoginClick();
                          }}
                          className="w-full rounded-md px-4 py-3 text-white border border-white/30 flex items-center gap-2 justify-center hover:bg-white/10 transition-colors"
                        >
                          <Image src={loginCircle} alt="User" width={20} height={20} />
                          Login
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onSignupClick();
                          }}
                          className="w-full rounded-md px-4 py-3 text-black font-semibold flex items-center gap-2 justify-center"
                          style={{ background: 'linear-gradient(90deg, rgb(254, 205, 61), rgb(255, 241, 198), rgb(255, 104, 192))' }}
                        >
                          <Image src={freeCredit} alt="Free Credit" width={20} height={20} />
                          Get 1 minute of Free Call
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 