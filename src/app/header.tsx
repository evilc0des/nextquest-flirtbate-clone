'use client';

import Image from "next/image";
import logo from "../../public/new-logo.webp";
import Select from "react-select";
import loginCircle from "../../public/loginCircle.svg";
import freeCredit from "../../public/free-credit-icon.png";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { GB, FR, ES, DE } from "country-flag-icons/react/3x2";
import SignupModal from '@/components/SignupModal';
import { useState } from 'react';
import { Bars3Icon } from "@heroicons/react/16/solid";
import SideMenu from '@/components/SideMenu';

export default function Header() {
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-center p-4 sm:px-[20%] px-8 bg-fuchsia-950/60 sm:gap-8 gap-4 fixed top-0 left-0 right-0 z-50">
                <Image className="sm:w-[182px] w-[120px]" src={logo} alt="Flirtbate" width={182} height={36} />
                <div className="sm:w-[300px] h-[40px] rounded-md p-4 sm:border border-white/30 flex items-center gap-2">
                    <MagnifyingGlassIcon className="sm:w-4 sm:h-4 w-6 h-6 text-white" />
                    <input className="w-full h-[30px] bg-transparent outline-none text-white hidden sm:block" type="text" placeholder="Search" />
                </div>
                <Select
                    options={[
                        { value: 'en', label: <div className="flex items-center gap-2 text-white"><GB /> EN</div> },
                        { value: 'fr', label: <div className="flex items-center gap-2 text-white"><FR /> FR</div> },
                        { value: 'es', label: <div className="flex items-center gap-2 text-white"><ES /> ES</div> },
                        { value: 'de', label: <div className="flex items-center gap-2 text-white"><DE /> DE</div> }
                    ]}
                    defaultValue={{ value: 'en', label: <div className="flex items-center gap-2 text-white"><GB /> EN</div> }}
                    className="w-[120px] bg-transparent sm:border border-white/30 rounded-md"
                    styles={{
                        control: (base) => ({
                            ...base,
                            backgroundColor: 'transparent',
                            borderColor: 'transparent'
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: 'transparent'
                        }),
                        option: (base) => ({
                            ...base,
                            color: 'white',
                            backgroundColor: 'transparent',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                        })
                    }}
                />
                <button className="rounded-md px-4 py-2 text-white border border-white/30 flex items-center gap-2 cursor-pointer hidden sm:flex">
                    <Image src={loginCircle} alt="User" width={20} height={20} />
                    Login
                </button>
                <button
                    onClick={() => setIsSignupModalOpen(true)}
                    className="rounded-md px-6 py-2 text-black font-semibold border border-white/30 flex items-center gap-2 cursor-pointer hidden sm:flex"
                    style={{ background: 'linear-gradient(90deg, rgb(254, 205, 61), rgb(255, 241, 198), rgb(255, 104, 192))' }}
                >
                    <Image src={freeCredit} alt="Free Credit" width={20} height={20} />
                    Get 1 minute of Free Call
                </button>
                <button onClick={() => setIsSideMenuOpen(true)} className="rounded-md px-4 py-2 text-white flex items-center gap-2 cursor-pointer sm:hidden">
                    <Bars3Icon className="w-6 h-6 text-white" />
                </button>
            </header>
            <SideMenu
                isOpen={isSideMenuOpen}
                onClose={() => setIsSideMenuOpen(false)}
                onLoginClick={() => setIsSignupModalOpen(true)}
                onSignupClick={() => setIsSignupModalOpen(true)}
            />

            <SignupModal 
                isOpen={isSignupModalOpen} 
                onClose={() => setIsSignupModalOpen(false)} 
            />
        </>
    );
}
