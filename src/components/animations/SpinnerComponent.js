import React, { useEffect, useState } from 'react'

const SpinnerComponent = () => {
  return (
    <>
<div class="flex items-center justify-center">
    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div class="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-48 w-48"></div>
    </div>
</div>
{/* <div class="shadow rounded-md p-4 w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-300 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-300 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-300 rounded col-span-2"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-300 rounded"></div>
      </div>
    </div>
  </div>
</div> */}
    </>
  )
}

export default SpinnerComponent