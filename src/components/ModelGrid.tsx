'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { REGIONS, AGE_RANGES, GENDERS, CREDITS } from '@/constants/filters';
import CustomSelect from "@/components/ui/CustomSelect";

interface Model {
    name: string;
    age: number;
    gender: string;
    region: string;
    credits: number;
    photo: string;
    online: boolean;
    favorite: boolean;
}

interface ModelGridProps {
    models: Model[];
}

export default function ModelGrid({ models }: ModelGridProps) {
    const [currentlyOnline, setCurrentlyOnline] = useState(false);
    const [region, setRegion] = useState<{ value: string, label: string } | null>();
    const [ageRange, setAgeRange] = useState<{ value: string, label: string } | null>();
    const [gender, setGender] = useState<{ value: string, label: string } | null>();
    const [credits, setCredits] = useState<{ value: string, label: string } | null>();

    return (
        <div className="w-full flex flex-col justify-center items-center gap-16 mb-24">
            <div className="toolbar gap-4 grid grid-cols-2 sm:flex items-stretch">
                <button
                    className="rounded-md px-4 py-4 text-black font-semibold bg-white/10 cursor-pointer flex items-center gap-2"
                    onClick={() => setCurrentlyOnline(!currentlyOnline)}
                >
                    <div className="w-6 h-6 rounded-full bg-green-400 shadow-green-400/50 shadow-xl"></div>
                    <span className="text-gray-300 text-sm">Currently Online</span>
                </button>
                <CustomSelect
                    className="row-start-2 col-span-2"
                    options={REGIONS}
                    onChange={(option) => setRegion(option)}   
                    placeholder="Region"
                />
                <CustomSelect
                    options={AGE_RANGES}
                    onChange={(option) => setAgeRange(option)}
                    placeholder="Age Range"
                />
                <CustomSelect
                    options={GENDERS}
                    onChange={(option) => setGender(option)}
                    placeholder="Gender"
                />
                <CustomSelect
                    options={CREDITS}
                    onChange={(option) => setCredits(option)}
                    placeholder="Credits"
                />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-[400px] sm:grid-rows-[400px] gap-8 gap-y-12 p-4">
                {models
                    .filter((model) => currentlyOnline ? model.online : true)
                    .filter((model) => region ? model.region === region.value : model)
                    .filter((model) => ageRange ?
                        model.age > Number(ageRange.value.split("-")[0]) || model.age <= Number(ageRange.value.split("-")[1])
                        : model
                    )
                    .filter((model) => gender ? model.gender === gender.value : model)
                    .filter((model) => credits ? model.credits >= Number(credits.value.split("-")[0]) && model.credits <= Number(credits.value.split("-")[1]) : model)
                    .map((model) => {
                        const RegionFlag = REGIONS.find((r) => r.value === model.region)?.flag;
                        return (
                            <div key={model.name} className="w-[100%] sm:w-[300px] h-[400px] flex flex-col justify-between relative">
                                <HeartIcon className="w-6 h-6 text-gray-400 absolute top-[20px] right-[20px]" />
                                <div className="grow shrink rounded-md overflow-hidden relative">
                                    <Image className="object-cover" objectFit="cover" layout="fill" src={model.photo} alt={model.name} />
                                </div>
                                <div className="flex-none">
                                    <h2 className="text-2xl font-bold text-center flex items-center gap-4">
                                        {model.name}
                                        {model.online && <div className="w-2 h-2 rounded-full bg-green-400"></div>}
                                        {RegionFlag && <RegionFlag className="w-4 h-4" />}
                                        <p className="text-gray-400 text-xs font-light">{model.credits} credit/min</p></h2>
                                    <p className="text-gray-400">{model.age} | {model.region}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

