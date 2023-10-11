import { Typography } from "@originprotocol/origin-storybook";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EmailList2 = () => {
  const [email, setEmail] = useState();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex flex-col align-items-center text-center my-10 sm:my-12 md:my-16 md:space-y-6">
            <Typography.H4 className="text-white font-bold opacity-100 md:-mb-6">
              Join our mailing list
            </Typography.H4>
            <Typography.H5 className="opacity-60 md:scale-50 text-sm mx-auto font-normal">
              Your email will be kept private.
            </Typography.H5>
            <form
              className="w-full flex flex-col items-center gap-4 mt-6"
              onSubmit={async (e) => {
                e.preventDefault();
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
        .splines {
          right: calc(50% - 700px);
        }

        .text {
          width: 50%;
        }

        .email {
          width: 50%;
          border: 0;
          border-radius: 10px;
          color: white;
          background-color: #ffffff27;
          margin-top: 5px;
          margin-bottom: 10px;
          padding: 10px 20px;
        }

        ::placeholder {
          color: white;
        }

        button.submit {
          display: inline-block;
          border: 0;
          border-radius: 999px;
          white-space: nowrap;
          padding: 5px 35px;
          font-weight: bold;
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

export default EmailList2;
