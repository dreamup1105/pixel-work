import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@windmill/react-ui'
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon, BellIcon, PhoneIcon, MailIcon, ArrowCircleLeft } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/applicantsData'
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Pagination,
} from '@windmill/react-ui'

import {
    doughnutOptions,
    lineOptions,
    doughnutLegends,
    lineLegends,
} from '../utils/demo/chartsData'

function JobListing() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const navigate = useHistory();
    // pagination setup
    const resultsPerPage = 10
    const totalResults = response.length

    // pagination change control
    function onPageChange(p) {
        setPage(p)
    }

    //redirect application page
    const history = useHistory();
    function backPage() {
        history.push("/app/applications")
    }

    //show applicants for the job
    function showApplicants(id) {
        console.log("Who are you", id)
        navigate.push("/app/applications/lists/" + id);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
    }, [page])

    return (
        <>
            <div className="flex flex-col bg-white mx-12 my-12 px-16 py-8">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row mb-2">
                        <div className="flex flex-row space-x-1 text-gray-600 text-base">
                            <ArrowCircleLeft onClick={backPage}></ArrowCircleLeft>
                            <span>Back</span>
                        </div>
                        <div className="ml-2">
                            <span>Android Developer</span>
                        </div>
                    </div>
                </div>
                <hr className="w-full mb-4"></hr>
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <tr>
                                <TableCell><div className="flex items-center"><input type="checkbox" className="hidden mr-3 md:block"></input><span>#Name</span></div></TableCell>
                                <TableCell>Contact</TableCell>
                                <TableCell>Applied on</TableCell>
                                <TableCell>Job Type</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Resume</TableCell>
                            </tr>
                        </TableHeader>
                        <TableBody>
                            {data.map((applicant, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            <input type="checkbox" className="hidden mr-3 md:block"></input>
                                            <div>
                                                <p className="font-semibold">{applicant.name}</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">{applicant.mail}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <button className="h-8 mr-2 rounded rounded-full border border-green-500 text-white mb-auto mt-auto px-2" key={i}>
                                            <MailIcon></MailIcon>
                                        </button>
                                        <button className="h-8 rounded rounded-full border border-green-500 text-white mb-auto mt-auto px-2" key={i}>
                                            <PhoneIcon></PhoneIcon>
                                        </button>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm">{applicant.applied_date}</span>
                                    </TableCell>
                                    <TableCell>
                                        <Badge type={applicant.type}>
                                            <button className="h-8 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2">{applicant.type}</button></Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge type={applicant.status}><button className="flex flex-row justify-center items-center h-8 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2"><input type="radio" className="bg-slimgreen radio-button hidden mr-1 md:block" checked></input>{applicant.status}</button></Badge>
                                    </TableCell>
                                    <TableCell>
                                        <button className="h-8 bg-primary rounded text-white mb-auto mt-auto px-2">
                                            Resume
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TableFooter>
                        <Pagination
                            totalResults={totalResults}
                            resultsPerPage={resultsPerPage}
                            label="Table navigation"
                            onChange={onPageChange}
                        />
                    </TableFooter>
                </TableContainer>
            </div>
            {/* <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
        </>
    )
}

export default JobListing
