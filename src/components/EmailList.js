import React, { useState } from 'react'
import { fbt } from 'fbt'
import { toast } from 'react-toastify'
import { Typography } from '@originprotocol/origin-storybook'

const EmailList = () => {
  const [email, setEmail] = useState()

  return (
    <>
      <section className="mail">
        <div className="d-flex flex-column align-items-center text-center">
          <Typography.H3>Join our mailing list</Typography.H3>
          <div className='lighter text mt-2 mb-4'>Be the first to hear about major NFT drops and important product updates. Your email will be kept private.</div>
          <form
            className='justify-content-center'
            onSubmit={async (e) => {
              e.preventDefault()

              const searchParams = new URLSearchParams()
              searchParams.set('email', email)
              searchParams.set('source', 'ousd')

              const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_JOIN_URL, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                referrerPolicy: 'no-referrer',
                body: searchParams,
              })

              if (response.ok) {
                const json = await response.json()
                if (json.success) {
                  setEmail('')
                  if (json.message === `You're already registered!`) {
                    toast.success(
                      fbt(
                        "You're already registered!",
                        'Email Subscription already registered'
                      )
                    )
                  } else {
                    toast.success(
                      fbt('Thanks for signing up!', 'Email Subscription success')
                    )
                  }
                } else {
                  toast.error(
                    fbt(
                      'Error subscribing you to the email list',
                      'ErrorEmailSubscription'
                    )
                  )
                }
              } else {
                toast.error(
                  fbt(
                    'Error subscribing you to the email list',
                    'ErrorEmailSubscription'
                  )
                )
              }
            }}
          >
            <input
              type="email"
              onChange={(e) => {
                e.preventDefault()
                setEmail(e.target.value)
              }}
              required
              value={email}
              placeholder='Email'
              className='email'
            />
            <button
              type='submit'
              className='submit'
            >
              Join
            </button>
          </form>
        </div>
      </section>
      <style jsx>{`
        section {
          padding: 5%;
        }

        .text {
          width: 50%;
        }

        .email {
          width: 70%;
          border: 0;
          border-radius: 10px;
          color: white;
          background-color: #ffffff40;
          margin: 20px 0;
          padding: 15px 20px;
        }

        ::placeholder{
          color: white;
        }

        button.submit {
          display: inline-block;
          border: 0;
          border-radius: 50px;
          white-space: nowrap;
          margin: 0px 10px 10px 10px;
          padding: 15px 20px;
          color: #183140;
          background-color: #ffffff;
        }

        @media (max-width: 799px) {
          .text {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default EmailList