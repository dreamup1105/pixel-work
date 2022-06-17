import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Input } from '@windmill/react-ui'
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import PageTitle from '../components/Typography/PageTitle'
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/jobData'
import {
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

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <div className="flex flex-row justify-between">
        <PageTitle>All Jobs</PageTitle>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 mt-5 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {data.map((user, i) => (
          <Card className="flex h-48">
            <img className="object-cover w-1/3" src="/img/forest.jpeg" />
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
              <p className="text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam
                quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
                dolorum.
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}

export default JobListing
