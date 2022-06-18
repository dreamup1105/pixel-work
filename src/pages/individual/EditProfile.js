import React from 'react'

import { Link } from 'react-router-dom'
import ProfileData from '../utils/demo/ProfileData'
import { ProfileAvatarIcon, FacebookIcon, InstagramIcon, DribbbleIcon, TwitterIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'

function EditProfile() {
    return (
        <>
            <div className="flex flex-row bg-white h-36 mx-12 my-12 px-2 py-4 justify-between items-center">
                <span>Profile information</span>
                <div className="flex flex-row">
                    <button className="rounded w-32 py-2 mr-2 bg-gray-200 text-black-400 mb-auto mt-auto px-2">Cancel</button>
                    <button className="rounded w-45 py-2 mr-2 bg-malachite text-white mb-auto mt-auto px-2">Save Changes</button>
                </div>
            </div>
            <div className="flex flex-col bg-white mx-12 my-12 px-16 py-8">
                <div className="flex flex-row">
                    <div className="mr-3">
                        <RoundIcon
                            icon={ProfileAvatarIcon}
                            iconColorClass="text-orange-500 dark:text-orange-100"
                            bgColorClass="transparent dark:bg-orange-500"
                            borderColorClass="rounded border-4 border-orange-400"
                            className="mr-4"
                        />
                    </div>
                    <button className="rounded w-45 py-2 mr-2 bg-slimgreen text-white mb-auto mt-auto px-2">Upload new picture</button>
                    <button className="rounded w-32 py-2 mr-2 bg-gray-200 text-black-400 mb-auto mt-auto px-2">Delete</button>

                </div>
                <div className="flex flex-col mt-16 gap-2">
                    <span className="font-bold">Generals</span>
                    <div className="flex flex-row w-full space-x-2">
                        <div className="flex-1 flex flex-col">
                            <span>Company Name</span>
                            <input type="text" className="w-full h-8 mt-1 pl-2 border border-gray-400 rounded" placeholder="Enter your name"></input>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span>Company Tagline</span>
                            <input type="text" className="w-full h-8 mt-1 pl-2 border border-gray-400 rounded" placeholder="Enter your name"></input>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span>Select Your Time Zone</span>
                        <input type="text" className="w-full" value="Asia/Dhaka"></input>
                    </div>
                </div>
                <div className="flex flex-col mt-16 gap-2">
                    <span className="font-bold">About Company</span>
                    <textarea className="company-info px-2 resize-none h-56 border border-gray-400 rounded">{ProfileData.companyInfo}</textarea>
                </div>
                <div className="flex flex-col mt-12 gap-3 w-full">
                    <div className="w-full">
                        <span className="font-bold">Socials</span>
                    </div>
                    <div className="flex flex-col mt-4 space-y-3">
                        <div className="flex flex-row items-center justify-between gap-4">
                            <div className="flex flex-row items-center gap-2 h-12 text-black mb-auto mt-auto px-2">
                                <FacebookIcon></FacebookIcon>Facebook
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="text" className="pl-2 h-8 mt-auto mb-auto rounded border border-gray-400" placeholder="Enter Username"></input>
                                <div>Submit</div>
                                <span className="font-bold">x</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-4">
                            <div className="flex flex-row items-center gap-2 h-12 text-black mb-auto mt-auto px-2">
                                <InstagramIcon></InstagramIcon>Instagram</div>
                            <div className="flex flex-row gap-2">
                                <input type="text" className="pl-2 h-8 mt-auto mb-auto rounded border border-gray-400" placeholder="Enter Username"></input>
                                <div>Submit</div>
                                <span className="font-bold">x</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-4">
                            <div className="flex flex-row items-center gap-2 h-12 text-black mb-auto mt-auto px-2">
                                <TwitterIcon></TwitterIcon>Twitter</div>
                            <div className="flex flex-row gap-2">
                                <input type="text" className="pl-2 h-8 mt-auto mb-auto rounded border border-gray-400" placeholder="Enter Username"></input>
                                <button className="rounded w-36 py-2 mr-2 bg-slimgreen text-white mb-auto mt-auto px-4">Link</button>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-4">
                            <div className="flex flex-row items-center gap-2 h-12 text-black mb-auto mt-auto px-2">
                                <DribbbleIcon></DribbbleIcon>Dribbble</div>
                            <div className="flex flex-row gap-2">
                                <input type="text" className="pl-2 h-8 mt-auto mb-auto rounded border border-gray-400" placeholder="Enter Username"></input>
                                <button className="rounded w-36 py-2 mr-2 bg-slimgreen text-white mb-auto mt-auto px-4">Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile
