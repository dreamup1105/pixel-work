import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Card } from '@windmill/react-ui'
import PageTitle from '../components/Typography/PageTitle'
import {
  SearchIcon,
  GridLayoutIcon,
  DropListIcon,
  DropMenuIcon,
  ListShowIcon
} from '../icons'
import response from '../utils/demo/jobData'
import Avatar1 from '../assets/img/avatar1.png'

function JobListing() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const navigation = useHistory()
  const [jobrow, setJobRow] = useState(3)
  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length
  // get the url params
  const { id } = useParams();
  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  //control the layout
  function showGridLayout() {
    setJobRow(3)
  }
  function showListLayout() {
    setJobRow(1)
  }
  //redirect job view page
  function viewjob(i) {
    navigation.push('joblistings/viewjob/' + `${i}`);
  }
  //search function
  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };
  const filtered = !search
    ? data
    : data.filter((job) =>
      job.team.toLowerCase().includes(search.toLowerCase()) || job.type.toLowerCase().includes(search.toLowerCase())
    );
  console.log("fff", filtered)
  return (
    <>
      <div className="flex flex-row justify-center md:justify-between">
        <PageTitle>All Jobs</PageTitle>
        <div className="ml-2 h-9 border-l h-1/2 border-gray-300" style={{ height: 37, marginTop: 20 }}></div>
        {/* <!-- Search input --> */}
        <div className="flex ml-4 flex-1 lg:mr-32 rounded-full">
          <div className="relative w-full max-w-xl mr-6 rounded-3xl focus-within:text-purple-500">
            <div className="absolute inset-y-0 z-20 flex items-center pl-3" style={{ top: 0 }}>
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              className="z-10 pl-8 mt-5 text-gray-700 w-4/5 h-10 border rounded-3xl"
              type="text" value={search} onChange={handleSearchChange}
              placeholder="Search by company title and job key.........." style={{ borderRadius: 24 }}
              aria-label="Search"
            ></input>
          </div>
        </div>
      </div>
      <hr className="w-full mb-4"></hr>
      <div className="flex flex-col md:flex-row justify-between mb-3 md:mb-3">
        <div className="flex flex-row md:flex-col">
          <span className="text-sm text-black">Showing 300 Jobs Results</span>
          <span className="text-xs text-gray-600 ml-3 md:ml-0 mt-1 md:mt-1">Based your preferences</span>
        </div>
        <div className="flex flex-row items-center flex-wrap md:flex-wrap">
          <div className="flex flex-row justify-center mr-6">
            <input type="radio" className="mr-2 mt-1"></input>
            <label htmlFor="label" style={{ marginTop: -2 }}>Fulltime</label>
          </div>
          <div className="flex flex-row justify-center mr-6">
            <input type="radio" className="mr-2 mt-1"></input>
            <label htmlFor="label" style={{ marginTop: -2 }}>Freelance</label>
          </div>
          <div className="mr-6">
            <button className="border border-black-500 rounded px-2 py-1">
              <div className="flex flex-row justify-between items-center space-x-2">
                <DropListIcon></DropListIcon>
                <span>News</span>
                <DropMenuIcon></DropMenuIcon>
              </div>
            </button>
          </div>
          <div className="mr-6">
            <button className="border border-black-500 rounded px-2 py-1">
              <div className="flex flex-row justify-between items-center space-x-2">
                <DropListIcon></DropListIcon>
                <span>Salary Range</span>
                <DropMenuIcon></DropMenuIcon>
              </div>
            </button>
          </div>
          <div className="mr-4">
            <button className="w-9 h-9 border border-black-500 rounded px-2 py-2" onClick={() => showListLayout()}>
              <div className="flex flex-row justify-between items-center space-x-2">
                <ListShowIcon></ListShowIcon>
              </div>
            </button>
          </div>
          <div className="mr-1 mt-1">
            <button className="w-9 h-9 bg-malachite rounded focus:outline-none shadow-none outline-none focus:border-none hover:outline-none rounded-xl text-center" onClick={() => showGridLayout()}>
              <GridLayoutIcon></GridLayoutIcon>
            </button>
          </div>
        </div>
      </div>
      <div className={`flex flex-wrap grid grid-cols-1 mt-3 sm:grid-cols-${jobrow} gap-2`}>
        {filtered.map((job, i) => (
          <Card className="flex flex-col p-5" key={i} onClick={() => viewjob(i)}>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">{job.team}</span>
                <span className="text-black-500 text-xl font-semibold">{job.position}</span>
              </div>
              <div className="job-avatar">
                <img className="object-cover w-full" src={Avatar1} />
              </div>
            </div>
            <div className="mt-5">
              <span className="text-black text-base">{job.fromPrice} - {job.toPrice}</span>
            </div>
            <div className="mt-5">
              <p className="text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam
                quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
                dolorum.
              </p>
            </div>
            <div className="w-full mt-8">
              <button className="rounded rounded-full w-45 bg-opacity-25 py-2 mr-2 bg-malachite text-slimgreen mb-auto mt-auto px-3">{job.type}</button>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

export default JobListing
