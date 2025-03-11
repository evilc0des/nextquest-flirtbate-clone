"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../../public/new-logo.webp";
import { ArrowRightEndOnRectangleIcon, MagnifyingGlassIcon, UserIcon, VideoCameraIcon } from "@heroicons/react/16/solid";
import SignupModal from "@/components/SignupModal";
import MODELS from "@/constants/models";
import ModelGrid from "@/components/ModelGrid";
export default function Home() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [models] = useState(MODELS.map((model) => ({
    ...model,
    online: true,
    favorite: false,
  })));
  return (
    <div className="justify-items-center min-h-screen gap-16 mt-[200px] font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:row-start-2 items-center sm:items-start justify-start">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center gap-16 mb-24 sm:px-[25%] px-8">
          <div className="w-full sm:w-[60%] gap-4 flex flex-col sm:items-start items-center">
            <h1 className="text-4xl font-bold text-center sm:text-left"><span className="text-yellow-500">#1 Adult Video</span> Chat Platform</h1>
            <p className="text-gray-400 text-lg sm:text-xl text-center sm:text-left">
              From Cam Sex Chats to Private 1v1 Video Calls -<br />Discover Pleasure Without Limits.
            </p>
            <button className="rounded-md px-4 py-4 text-black font-semibold bg-pink-400 cursor-pointer shadow-pink-400/50 shadow-xl">
              Explore Models
            </button>
          </div>
          <div>
            <Image src="/home-banner-model1.webp" alt="Flirtbate" width={462} height={452} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-16">
          <div className="w-full sm:w-[30%] gap-4 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center">Explore your choices from the world of diverse beauty and charm</h1>
            <p className="text-gray-400 text-xl text-center">
              Select the companion who aligns with your desires.
            </p>
          </div>
        </div>
        <ModelGrid models={models} />
        <div className="w-full flex justify-center items-center gap-16 mb-16">
          <div className="sm:w-[60%] w-full gap-4 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center">Seamless connections made simple</h1>
            <p className="text-gray-400 text-xl text-center">
              Discover how easy it is to meet and interact with our models. Follow these simple steps to start your journey.
            </p>
            <div className="w-[80%] flex flex-col sm:flex-row justify-between items-start gap-32 mt-16 relative mb-16">
              <Image className="hidden sm:block absolute top-[-20px] left-[150px] w-[72%]" src="/line.png" alt="Pathway" width={300} height={300} />
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-pink-400/30 flex items-center justify-center">
                  <div className="w-18 h-18 rounded-full bg-pink-400/80 flex items-center justify-center">
                    <MagnifyingGlassIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center">Sign up / Log in</h2>
                <p className="text-gray-400 text-center">
                  Create your free account or log in. Begin exploring with just a few clicks, ensuring your privacy and security from the start.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-pink-400/30 flex items-center justify-center">
                  <div className="w-18 h-18 rounded-full bg-pink-400/80 flex items-center justify-center">
                    <UserIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center">Choose your model</h2>
                <p className="text-gray-400 text-center">
                  Whether you are seeking passionate encounters or bodily exploration our video call feature will serve all your fantasies.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-pink-400/30 flex items-center justify-center">
                  <div className="w-18 h-18 rounded-full bg-pink-400/80 flex items-center justify-center">
                    <VideoCameraIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center">Connect instantly</h2>
                <p className="text-gray-400 text-center">
                  Start an engaging convo. through video call or chat. We offer high-quality, secure connections for your private interactions.
                </p>
              </div>
            </div>
            <button onClick={() => setIsSignupModalOpen(true)} className="rounded-md px-4 py-4 flex items-center gap-2 text-black font-semibold bg-pink-400 cursor-pointer shadow-pink-400/50 shadow-xl">
              Sign up Now
              <ArrowRightEndOnRectangleIcon className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </main>
      <footer className="relative p-16 pb-4 flex flex-col gap-6 items-center justify-center bg-[url('/home-banner-model2.webp')] bg-cover bg-center w-full h-full">
        <div className="absolute -z-10 w-full h-full">
          <Image
            src="/Footer-min.webp"
            layout="fill"
            objectFit="cover"
            quality={100} alt={"footer-background"} />
        </div>
        <div className="w-[60%] gap-4 flex flex-col items-center mb-16 mt-24">
          <h1 className="text-6xl font-semibold text-center">Ready to explore uncharted pleasures?</h1>
          <p className="text-gray-400 text-xl text-center">
            Have the best experience on the best platform out there!
          </p>
          <button onClick={() => setIsSignupModalOpen(true)} className="mt-6 rounded-md px-4 py-4 flex items-center gap-2 text-black font-semibold bg-pink-400 cursor-pointer shadow-pink-400/50 shadow-xl">
            Sign up Now
            <ArrowRightEndOnRectangleIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="sm:w-[50%] w-full gap-4 flex sm:flex-row flex-col items-center sm:items-start justify-between border-t border-gray-600/50 pt-16">
          <div className="flex flex-col sm:items-start items-center">
            <Image src={logo} alt="Flirtbate" width={182} height={36} />
            <p className="text-gray-400 text-sm">Instant connections, lasting memories</p>
          </div>
          <div className="flex gap-8 sm:gap-16">
            <div className="flex flex-col items-start">
              <h2 className="text-gray-400 text-sm font-bold mb-4">MENU</h2>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Home
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                FAQs
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Sign up
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Login
              </a>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-400 text-sm font-bold mb-4">RESOURCES</h2>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >Privacy Statement</a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Terms of Service
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Cookie Policy
              </a>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-gray-400 text-sm font-bold mb-4">CATEGORY</h2>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >Cam to Cam</a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Sex Chat
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Chat With Girls
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Dirty Chats
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Stranger Chat
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Nude Chat
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Lesbian Chat
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Cuckold Chat
              </a>
              <a
                className="hover:underline hover:underline-offset-4 text-gray-400 text-sm"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              >
                Anonymous Chat
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-400">© 2025 Flirtbate, All Rights Reserved</p>
        </div>
      </footer>
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </div>
  );
}
