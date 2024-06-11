import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen w-full col items-center justify-center'>
      <img src="/img/NEWS.svg" alt="" className='w-2/5 md:w-32 animate-bounce' />
    </div>
  )
}

const TopHeadlinesLoading = () => {

  return (
    Array.from({length:5}).map( (_,i) => 
        <div className="top-headline-card" key={i}>
            <div className="col gap-3 p-3">
                <div className="w-2/12 skeleton-loading "></div>
                <div className=" h-7 w-1/3 skeleton-loading"></div>
            
                <div className=" w-1/12 skeleton-loading">
                </div>
                <div className=" w-2/3 skeleton-loading ">
                </div>
                <div className=" w-2/3 skeleton-loading ">
                </div>
            </div>
        </div>
    )
  )
}

const PopularNewsLoading = () => {

  return (
    Array.from({length:5}).map( (_,i) => 
        <div className="top-headline-card" key={i}>
            <div className="col gap-3 p-3">
                <div className="w-2/5 skeleton-loading "></div>
                <div className=" w-full h-24 rounded-lg skeleton-loading"></div>
                <div className=" w-2/5 skeleton-loading"></div>
                <div className=" h-7 w-4/5 skeleton-loading"></div>
            </div>
        </div>
    )
  )
}

export {Loading, TopHeadlinesLoading, PopularNewsLoading}
