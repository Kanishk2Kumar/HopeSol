import React from 'react'
import { About } from '@/components/About'
import { Authors } from '@/components/Authors'
import { WhySol } from '@/components/WhySol'
const page = () => {
  return (
    <div>
        <section>
            <About />
        </section>
        <section>
            <WhySol />
        </section>
        <section>
            <Authors />
        </section>
    </div>
  )
}

export default page