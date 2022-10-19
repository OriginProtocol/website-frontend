import { Button, Typography } from '@originprotocol/origin-storybook'
import positionSections from './positions.json'

const Jobs = () => {
  return (
    <div>
      {
        positionSections.map(section => (
          <div key={section.name} className='mb-4'>
            <Typography.H4 as='h3'>{section.name}</Typography.H4>
            <div className="mt-4" />
              <div className="space-y-2">
                {
                  section.positions.map(position => (
                    <div className="flex flex-row justify-between items-center" key={position.name}>
                      <div className="role">{position.name}</div>
                      <Button
                        href={position.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply
                      </Button>
                    </div>
                  ))
                }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Jobs