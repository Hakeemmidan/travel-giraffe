'use client'

import { FaMountain, FaTree, FaUmbrellaBeach, FaBus } from "react-icons/fa";
import { RiSailboatLine, RiBuilding2Fill } from "react-icons/ri"
import { MdOutlineDirectionsBike } from "react-icons/md"
import { TbHomeHeart } from "react-icons/tb"
import { GiCookingPot, GiCanoe } from "react-icons/gi"
import { useState } from "react";
import * as emailValidator from 'email-validator'

export function Form() {
    const [email, setEmail] = useState('')

    const handleSignUp = async () => {
        const isEmailValid = emailValidator.validate(email)
        if (!isEmailValid) {
            window.alert('Please enter a valid email address.')
            return
        }

        const likes: string[] = []
        // get likes
        document.querySelectorAll<HTMLInputElement>('input:checked').forEach(el => likes.push(el.name as string))
        try {
            await fetch('/api/user-preferences', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, likes })
        }) } catch(error) {
            console.error(error)
        }
    }
    
    return (
        <div className="pt-12 px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col items-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-5xl">Let&apos;s discover some awesome flights</h1>
                <p className="mb-6 text-lg text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">The world is calling</p>
            </div>

            {/* What kind of travel */}
            <p className="mt-2 mb-1 text-l font-medium text-gray-900 sm:text-xl">
                What kind of travel do you like to do?
            </p>
            <ul className="grid w-full gap-6 mb-10 md:grid-cols-3">
                <li>
                    <input type="checkbox" id="adventure-option" name="adventure" value="" className="hidden peer"/>
                    <label htmlFor="adventure-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <FaMountain className="mb-2 w-7 h-7" size={50} />
                            <div className="w-full text-lg font-semibold">Adventure</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="luxury-option" name="luxury" value="" className="hidden peer"/>
                    <label htmlFor="luxury-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <RiSailboatLine className="mb-2 w-7 h-7" size={50} />
                            <div className="w-full text-lg font-semibold">Luxury</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="solo-option" name="solo travel" value="" className="hidden peer"/>
                    <label htmlFor="solo-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <MdOutlineDirectionsBike className="mb-2 w-7 h-7" size={50} />
                            <div className="w-full text-lg font-semibold">Solo</div>
                        </div>
                    </label>
                </li>
            </ul>

            {/* What vibes */}
            <p className="mt-2 mb-1 text-l font-medium text-gray-900 sm:text-xl">
                What are some areas that you like?
            </p>
            <ul className="grid w-full gap-6 mb-10 md:grid-cols-3">
                <li>
                    <input type="checkbox" id="beaches-option" name="beaches" value="" className="hidden peer"/>
                    <label htmlFor="beaches-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <FaUmbrellaBeach className="mb-2 w-7 h-7" size={50} />
                            <div className="w-full text-lg font-semibold">Beaches</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="cities-option" name="cities" value="" className="hidden peer"/>
                    <label htmlFor="cities-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <RiBuilding2Fill className="mb-2 w-7 h-7" size={50} />
                            <div className="w-full text-lg font-semibold">Cities</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="village-option" name="village" value="" className="hidden peer"/>
                    <label htmlFor="village-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <span className="flex">
                                <FaTree className="mb-2 w-7 h-7" size={30} />
                                <TbHomeHeart className="mb-2 w-7 h-7" size={50} />
                            </span>
                            <div className="w-full text-lg font-semibold">Village</div>
                        </div>
                    </label>
                </li>
            </ul>

            {/* Things that matter when traveling */}
            <p className="mt-2 mb-1 text-l font-medium text-gray-900 sm:text-xl">
                What do you prefer to be available?
            </p>
            <ul className="grid w-full gap-6 mb-10 md:grid-cols-3">
                <li>
                    <input type="checkbox" id="food-option" name="food" value="" className="hidden peer"/>
                    <label htmlFor="food-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <GiCookingPot className="mb-2 w-7 h-7" size={50} />
                            <div className="w-full text-lg font-semibold">Great food</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="transportation-option" name="public transportation" value="" className="hidden peer"/>
                    <label htmlFor="transportation-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <FaBus className="mb-2 w-7 h-7" size={50} />
                            <div className="w-full text-lg font-semibold">Public transportation</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="activities-option" name="activities" value="" className="hidden peer"/>
                    <label htmlFor="activities-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary hover:text-primaryDarker peer-checked:text-primaryDarker hover:bg-gray-50">                           
                        <div className="block">
                            <span className="flex">
                                <GiCanoe className="mb-2 w-7 h-7" size={50} />
                            </span>
                            <div className="w-full text-lg font-semibold">Activities</div>
                        </div>
                    </label>
                </li>
            </ul>

            {/* Email section */}
            <div className="flex items-center">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input value={email} onChange={e => setEmail(e.target.value)}  type="email" required className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5" placeholder="someemail@gmail.com" />
                </div>
                <a onClick={handleSignUp} className={`cursor-pointer h-max ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded tracking-wide ${email.trim() === '' && 'cursor-not-allowed opacity-50 bg-gray-400 hover:bg-gray-400'}`}>
                    Sign up
                </a>
            </div>
        </div>
    )
}