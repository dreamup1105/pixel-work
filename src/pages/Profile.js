import React from 'react'

import { Link } from 'react-router-dom'
import PageTitle from '../components/Typography/PageTitle'
import ProfileData from '../utils/demo/ProfileData'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon, ProfileAvatarIcon, FacebookIcon, InstagramIcon, DribbbleIcon, TwitterIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'

function Profile() {
  return (
    <>
      <div className="flex flex-col bg-white mx-12 my-12 px-16 py-8">
        <div className="flex flex-row">
          <div>
            <RoundIcon
              icon={ProfileAvatarIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="transparent dark:bg-orange-500"
              borderColorClass="rounded border-4 border-orange-400"
              className="mr-4"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl">{ProfileData.companyname}</span>
            <span className="text-gray-600">{ProfileData.type}</span>
            <Link to="/app/profile/edit">
              <button className="rounded w-40 py-2 bg-slimgreen text-white mb-auto mt-auto px-2">Edit Profile</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-16 gap-2">
          <span className="font-bold">About Company</span>
          <span>{ProfileData.companyInfo}</span>
        </div>
        <div className="flex flex-col mt-12 gap-3 w-full">
          <div className="w-full">
            <span className="font-bold">Socials</span>
          </div>
          <div className="flex flex-col mt-4 space-y-3">
            <div className="flex flex-row justify-center items-center gap-4">
              <button className="flex flex-row justify-center items-center gap-2 h-12 w-1/2 bg-gray-300 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2"><FacebookIcon></FacebookIcon>Facebook</button>
              <button className="flex flex-row justify-center items-center gap-2 h-12 w-1/2 bg-gray-300 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2"><InstagramIcon></InstagramIcon>Instagram</button>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <button className="flex flex-row justify-center items-center gap-2 h-12 w-1/2 bg-gray-300 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2"><TwitterIcon></TwitterIcon>Twitter</button>
              <button className="flex flex-row justify-center items-center gap-2 h-12 w-1/2 bg-gray-300 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2"><DribbbleIcon></DribbbleIcon>Dribbble</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
