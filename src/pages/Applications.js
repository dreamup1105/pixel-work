import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PageTitle from '../components/Typography/PageTitle'
import { ViewJobIcon, DeleteIcon, EditJobIcon, DropdownIcon } from '../icons'
import response from '../utils/demo/tableData'
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

function JobListing() {
  const jobpos = localStorage.getItem("jobpos");
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  // const [radioColors, Set]

  const navigate = useHistory();
  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  //show applicants for the job
  function showApplicants(id) {
    navigate.push("/app/applications/lists/" + id);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <div className="flex flex-row justify-between">
        {
          jobpos == 0 ?
            <PageTitle>Applications</PageTitle>
            :
            <PageTitle>All Applied Application</PageTitle>
        }
        <Link className="mb-auto mt-auto" to="/app/applications/addjob">
          <button className="h-auto md:h-8 bg-slimgreen rounded text-white mb-auto mt-auto px-3">
            <span className="pl-auto pr-auto" aria-hidden="true">
              +
            </span>
            Add Job
          </button>
        </Link>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell><div className="flex items-center"><input type="checkbox" className="hidden mr-3 md:block"></input><span>#Job Title</span></div></TableCell>
              <TableCell>Applicants</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Job Type</TableCell>
              <TableCell>Expire Date</TableCell>
              <TableCell>Setting</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((job, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <input type="checkbox" className="hidden mr-3 md:block"></input>
                    <div>
                      <p className="font-semibold">{job.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{job.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <button className="h-8 bg-slimgreen rounded text-white mb-auto mt-auto px-2" onClick={() => showApplicants(i)} key={i}>{job.applicants} applicants</button>
                </TableCell>
                <TableCell>
                  <Badge type={job.status}><button className="flex flex-row justify-center items-center h-8 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2"><input type="radio" className={`apply-${job.status} radio-button hidden mr-1 md:block`} checked></input>{job.status}<DropdownIcon className="ml-2"></DropdownIcon></button></Badge>
                </TableCell>
                <TableCell>
                  <Badge type={job.type}>
                    <button className="h-8 rounded-full border border-gray-400 text-black mb-auto mt-auto px-2">{job.type}</button></Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{job.date}</span>
                </TableCell>
                <TableCell>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-center items-center space-x-2">
                      <ViewJobIcon></ViewJobIcon>
                      <span>View</span>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                      <EditJobIcon></EditJobIcon>
                      <span>Edit</span>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                      <DeleteIcon></DeleteIcon>
                      <span>Delete</span>
                    </div>
                  </div>
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
    </>
  )
}

export default JobListing
