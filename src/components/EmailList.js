import React, { useState } from 'react'
import { fbt } from 'fbt'
import { toast } from 'react-toastify'

const EmailList = () => {
  const [email, setEmail] = useState()

  return (
    <>
      <section className="mail">
        <div className="container d-flex flex-column align-items-center">
          <h2>Join our mailing list</h2>
          <h6>Be the first to hear about major NFT drops and important product updates. Your email will be kept private.</h6>
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

        .container {
          width: 44%;
          text-align: center;
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
      `}</style>
    </>
  )
}

export default EmailList