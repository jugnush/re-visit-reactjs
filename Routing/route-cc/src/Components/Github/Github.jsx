import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router'

function Github() {

  const data = useLoaderData();

  // const [data1, setData] = useState([])

  // const fetchData = ()=>{
  //   fetch('https://api.github.com/users/jugnush')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log('data', data)
  //     setData(data);
  //   })
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  return (
    <div className='bg-gray-500 text-white text-3xl p-4 text-center'>Github follower: {data?.followers} 
    <img className="w-1xs rounded-2xl" src={data?.avatar_url} alt="" width={200}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
 const response =  await fetch('https://api.github.com/users/jugnush')
//  console.log ('jugnu', response);
 return response.json();
}

// // export const githubInfoLoader = async () => {
// //   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
// //   return response.json()
// }