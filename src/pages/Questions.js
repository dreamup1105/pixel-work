import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { JobSeekerIcon, BusinessIcon } from '../icons'
import { Button } from '@windmill/react-ui'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

function Questions() {
    const [jobtype, setJobType] = useState(0)
    function setJobSeek() {
        setJobType(0);
    }
    function setBusiness() {
        setJobType(1);
    }
    function setType() {
        localStorage.setItem('jobpos', jobtype);
    }
    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-gray-300">
            <div className="question-setion w-2/5 bg-white border rounded flex flex-col p-5">
                <div className="question text-left px-5">
                    <span className="text-black-400 text-3xl">What type of Lorem ipusm is dummy text?</span>
                </div>
                <div className="rounded border border-gray-300 mt-6 w-full">
                    <button className="w-full flex flex-row justify-between p-2" onClick={() => setJobSeek()}>
                        <span>Job Seeker</span>
                        <JobSeekerIcon></JobSeekerIcon>
                    </button>
                </div>
                <div className="rounded border border-gray-300 mt-2 w-full">
                    <button className="w-full flex flex-row justify-between p-2" onClick={() => setBusiness()}>
                        <span>Business</span>
                        <BusinessIcon></BusinessIcon>
                    </button>
                </div>
                <div className="next-btn">
                    <Button tag={Link} to="/app" onClick={() => setType()} block className="w-full h-12 mt-4 bg-slimgreen rounded text-white mb-auto px-2">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Questions
