import React from 'react'

import { Link, useHistory } from 'react-router-dom'
import { Card, CardBody } from '@windmill/react-ui'
import {
    ArrowCircleLeft,
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    OtherSocialIcon,
    EditJobIcon,
    PixelCompIcon,
    LinkIcon,
    DateIcon
}
    from '../icons'
import data from '../utils/demo/jobData'

function ViewJob(props) {
    const history = useHistory();
    let job_id = props.match.params.id
    function backPage() {
        history.push("/app/joblistings")
    }
    return (
        <>
            <div className="flex flex-col mx-2 my-2 px-2 py-2">
                <div className="flex flex-row mb-2">
                    <div className="flex flex-row space-x-1 text-gray-600 text-base">
                        <ArrowCircleLeft onClick={backPage}></ArrowCircleLeft>
                        <span>Back</span>
                    </div>
                    <div className="flex flex-row ml-2 justify-center items-center">
                        <DateIcon className="mr-1"></DateIcon>
                        <span className="mr-1 text-gray-400">Post Date:</span>
                        <span>9 Jun 2022</span>
                    </div>
                    <div className="flex flex-row ml-2 justify-center items-center">
                        <DateIcon className="mr-1"></DateIcon>
                        <span className="mr-1 text-gray-400">Last Date:</span>
                        <span> 19 Jun 2022</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-2 space-y-4 md:space-x-4">
                    <div className="flex bg-white w-full md:w-8/12 flex-col p-4 space-y-4">
                        <div className="w-full">
                            <span className="uppercase text-gray-600">Job Description</span>
                        </div>

                        <div className="w-full">
                            <span className="text-base">{data[job_id].position}</span>
                        </div>
                        <div className="w-full">
                        </div>
                        <div className="w-full">
                            <button className="h-8 bg-slimgreen uppercase rounded text-white mb-auto mt-auto px-2">
                                Apply Now
                            </button>
                        </div>
                        <div className="w-full">
                            <div>
                                <span>{data[job_id].description}</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row items-center">
                                <span className="text-left mr-2">Social Link</span>
                                <hr className="w-10/12"></hr>
                            </div>
                            <div className="flex flex-row">

                            </div>
                        </div>
                        <div className="flex flex-row space-x-8">
                            <FacebookIcon></FacebookIcon>
                            <TwitterIcon></TwitterIcon>
                            <InstagramIcon></InstagramIcon>
                            <LinkedInIcon></LinkedInIcon>
                            <OtherSocialIcon></OtherSocialIcon>
                        </div>
                    </div>
                    <div className="flex relative flex-1 bg-white w-3/12 flex-col mt-0 p-4">
                        <div className="flex flex-row  justify-between visit-site relative">
                            <PixelCompIcon></PixelCompIcon>
                            <div className="relative flex flex-row absolute right-0 space-x-1">
                                <LinkIcon className="mt-2"></LinkIcon>
                                <u onClick={() => { console.log("Thanks for visiting my site") }} className="mt-1">Visit website</u>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-2">
                            <div>
                                <span className="text-base text-black-500">PiPixel Design Agency</span>
                            </div>
                            <div className="flex flex-row justify-center items-center space-x-2">
                                <EditJobIcon></EditJobIcon>
                                <span>Edit</span>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4">
                            <span>{data[job_id].description}</span>
                        </div>
                        <div className="flex flex-row mt-6">
                            <span>Company Details</span>
                            <hr></hr>
                        </div>
                        <div className="flex flex-row flex-x-2 text-sm mt-2 justify-between">
                            <li>12-200 Employees</li>
                            <li>Design Agency</li>
                        </div>
                        <div className="flex mt-6">
                            <button className="w-full h-8 bg-slimgreen rounded text-white mb-auto mt-auto px-2">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewJob
