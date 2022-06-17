import React from 'react'

import { Link, useHistory } from 'react-router-dom'
import PageTitle from '../components/Typography/PageTitle'
import ProfileData from '../utils/demo/ProfileData'
import SectionTitle from '../components/Typography/SectionTitle'
import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
import { ArrowCircleLeft } from '../icons'
import RoundIcon from '../components/RoundIcon'

function AddJob() {
    const history = useHistory();
    function backPage() {
        history.push("/app/applications")
    }
    return (
        <>
            <div className="flex flex-col bg-white mx-12 my-12 px-16 py-8">
                <div className="flex flex-row mb-2">
                    <div className="flex flex-row space-x-1 text-gray-600 text-base">
                        <ArrowCircleLeft onClick={backPage}></ArrowCircleLeft>
                        <span>Back</span>
                    </div>
                    <div className="ml-2">
                        <span>Post Job</span>
                    </div>
                </div>
                <hr className="w-full mb-4"></hr>
                <div className="flex flex-col mt-2 space-y-4">
                    <div className="flex flex-row w-full space-x-4">
                        <div className="flex-1 flex flex-col">
                            <span>Job Title</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Type here"></input>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span>Job Type</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Type here"></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full space-x-4">
                        <div className="flex-1 flex flex-col">
                            <span>Department</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Select Department"></input>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span>No of Vacancies</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Type here"></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full space-x-4">
                        <div className="flex-1 flex flex-col">
                            <span>Salary From</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Type here"></input>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span>Salary To</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Type here"></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full space-x-4">
                        <div className="flex-1 flex flex-col">
                            <span>Job Type</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Select Job Type"></input>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span>Status</span>
                            <input type="text" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Select Status"></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full space-x-4">
                        <div className="flex-1 flex flex-col">
                            <span>Start Date</span>
                            <input type="date" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="01/06/2022"></input>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span>Expired Date</span>
                            <input type="date" className="text-sm w-full h-8 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="30/6/2022"></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full space-x-4">
                        <div className="flex-1 flex flex-col">
                            <span>Descriptions</span>
                            <textarea type="text" className="text-sm w-full h-40 mt-1 pl-2 bg-gray-300 border border-gray-300 rounded" placeholder="Type here.........."></textarea>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <button className="rounded w-14 py-2 mr-2 bg-slimgreen text-white mb-auto mt-auto px-2">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddJob
