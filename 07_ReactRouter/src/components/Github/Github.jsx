import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/piyushvishwakarma307')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className=' flex text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div>
        <img src={data.avatar_url} alt="Git picture" width={300} /></div>
      <div className='flex flex-col justify-start items-start gap-4 ml-8'>
        <div>Username: {data.login}</div>
        <div>Followers: {data.followers}</div>
        <div>Following: {data.following}</div>
        <div>Public Repos: {data.public_repos}</div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/piyushvishwakarma307')
  return response.json()
}

// useLoaderData: useLoaderData is a hook provided by React Router that allows you to access the data returned by a loader function for a specific route. In this case, it retrieves the data fetched from the GitHub API and makes it available to the Github component for rendering.