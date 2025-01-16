import React from 'react'
import { Button } from '../ui/button'
import { BentoGrid } from '../bentogrids'
import Link from 'next/link'
function cta() {
  return (
    <div className='flex flex-col pt-9 justify-center items-center'>
        <Button variant="secondary" asChild>
            <Link href="#">Contact me</Link>
        </Button>
        <BentoGrid />
    </div>
  )
}

export default cta