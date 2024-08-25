import JobSection from '@/components/jobSection'
import SearchBar from '@/components/searchbar'
import React from 'react'

const FindJobs = () => {
  return (
    <main className="min-h-[calc(100vh-138px)]">
      <section>
        <SearchBar />
      </section>
      <section>
        <JobSection />
      </section>
    </main>
  )
}

export default FindJobs