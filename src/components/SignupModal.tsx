'use client';

import { useState } from 'react';
import Modal from './ui/Modal';
import Image from 'next/image';
import { Checkbox } from '@headlessui/react';
interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [referral, setReferral] = useState('');
    const [tncChecked, setTncChecked] = useState(true);
    const [rememberMeChecked, setRememberMeChecked] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup:', { email, password });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='sm:grid sm:grid-cols-[1fr_2fr] flex flex-col sm:flex-row'>
                <div className='relative sm:h-full h-[300px]'>
                    <div className="absolute -z-10 w-full h-full">
                        <Image
                            src="/auth-model1.webp"
                            layout="fill"
                            objectFit="cover"
                            quality={100} alt={"footer-background"} />
                    </div>
                </div>
                <div className='flex flex-col p-6 px-8'>
                    <h1 className='text-4xl font-bold mb-6'>Join Now for Free</h1>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block font-medium text-white mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium text-white mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                required
                            />
                        </div>
                        <div className='flex items-stretch gap-2'>
                            <div className='flex-1'>
                                <label htmlFor="password" className="block font-medium text-white mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                    required
                                />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="confirm-password" className="block font-medium text-white mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="referral" className="block font-medium text-white mb-1">
                                Referral Code (Optional)
                            </label>
                            <input
                                type="text"
                                id="referral"
                                value={referral}
                                onChange={(e) => setReferral(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            />
                        </div>
                        <div className='flex gap-36'>
                            <div className='flex items-center gap-2'>
                                <Checkbox
                                    checked={tncChecked}
                                    onChange={setTncChecked}
                                    className="group block size-4 rounded border bg-white data-[checked]:bg-pink-500"
                                />
                                <span className='text-white'><a href='#' className='text-fuchsia-500'>Terms & Conditions</a></span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Checkbox
                                    checked={rememberMeChecked}
                                    onChange={setRememberMeChecked}
                                    className="group block size-4 rounded border bg-white data-[checked]:bg-pink-500"
                                />
                                <span className='text-white'>Remember me</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-md text-black font-semibold"
                            style={{ background: 'linear-gradient(90deg, rgb(254, 205, 61), rgb(255, 241, 198), rgb(255, 104, 192))' }}
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className='flex flex-col justify-center items-center gap-4 border-t border-gray-700 pt-6'>
                        <p className='text-white'>Sign up as a Model <a href='#' className='text-fuchsia-500'>here</a></p>
                        <p className='text-white'>Already have an account? <a href='#' className='text-fuchsia-500'>Login</a></p>
                    </div>
                </div>
            </div>

        </Modal>
    );
} 