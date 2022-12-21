import { Button, Typography } from '@originprotocol/origin-storybook'
import capitalize from 'lodash/capitalize'

const Jobs = ({ jobs }) => {
  const fields = [...new Set(jobs?.map((job) => {
    return job.attributes.field
  }))].sort()

  return (
    <div>
      {
        fields?.map((field, i) => (
          <div key={i} className='mt-16 mb-4'>
            <Typography.H5 as='h3' className='font-bold'>{capitalize(field)}</Typography.H5>
            <div className="mt-4" />
              <div className="space-y-2">
                {
                  jobs.map((job, i) => {
                    if (job.attributes.field !== field) return
                    return (
                      <div className="flex flex-row justify-between items-center" key={i}>
                        <div className="role">{job.attributes.role}</div>
                        <Button
                          href={job.attributes.listingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply
                        </Button>
                      </div>
                    )
                  })
                }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Jobs