import React from 'react'
import News from 'components/News'

const CompanyContent = () => {
  return (
  <>
    <section className='intro grey'>
      <h1>Latest news</h1>
    </section>
    <News />
    <section className='articles grey'>
    </section>
    <section className='press light'>
    </section>
    <section className='inquiries grey'>
    </section>
  </>
  )
}

export default CompanyContent