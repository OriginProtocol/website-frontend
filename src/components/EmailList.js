import Image from "next/image";
import { Typography } from "@originprotocol/origin-storybook";
import React, { useState } from "react";
import { toast } from "react-toastify";
import analytics from "utils/analytics";

const EmailList = () => {
  const [email, setEmail] = useState();

  return (
    <>
      <section className="p-5 relative overflow-hidden">
        <span className="absolute z-0 right-0 -bottom-5 md:-bottom-5 md:hidden">
          <Image
            src="/images/graphics/splines34.svg"
            height={1363}
            width={1341}
            alt="spline"
          />
        </span>
        <span className="absolute z-0 right-0 -bottom-5 md:-bottom-5 hidden md:block">
          <Image
            src="/images/graphics/splines34.svg"
            height={800}
            width={800}
            alt="spline"
          />
        </span>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex flex-col align-items-center text-center mt-20 mb-60 md:mb-20 md:space-y-6">
            <Typography.H4 className="text-white">
              Join our mailing list to stay in touch
            </Typography.H4>
            <div className="lighter text mt-2 mb-4 mx-auto">
              Be the first to hear about major NFT drops and important product
              updates. Your email will be kept private.
            </div>
            <form
              className="justify-content-center"
              onSubmit={async (e) => {
                e.preventDefault();

                analytics.track(`On Mailing List Subscription`, {
                  category: "general",
                });

                const searchParams = new URLSearchParams();
                searchParams.set("email", email);

                const response = await fetch(`/mailing-list/join`, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  referrerPolicy: "no-referrer",
                  body: searchParams,
                });

                if (response.ok) {
                  const json = await response.json();
                  if (json.success) {
                    setEmail("");
                    if (json.message === `You're already registered!`) {
                      toast("You're already registered!");
                    } else {
                      toast("Thanks for signing up!");
                    }
                  } else {
                    toast.error("Error subscribing you to the email list");
                  }
                } else {
                  toast.error("Error subscribing you to the email list");
                }
              }}
            >
              <input
                type="email"
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                required
                value={email}
                placeholder="Email"
                className="email"
              />
              <button type="submit" className="submit">
                Join
              </button>
            </form>
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
        }

        .text {
          width: 50%;
        }

        .email {
          width: 20%;
          border: 0;
          border-radius: 10px;
          color: white;
          background-color: #ffffff40;
          margin: 20px 0;
          padding: 15px 20px;
        }

        ::placeholder {
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

          .email {
            width: 70%;
          }
        }
      `}</style>
    </>
  );
};

export default EmailList;
