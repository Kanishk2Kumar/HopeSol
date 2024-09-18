import React from 'react'
import { About } from '@/components/About'
import { Authors } from '@/components/Authors'
const page = () => {
  return (
    <div>
        <section>
            <About />
        </section>
        <section>
            <Authors />
        </section>
    </div>
  )
}

export default page