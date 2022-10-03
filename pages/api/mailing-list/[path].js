export default async function handler(req, res) {
  try {
      const searchParams = new URLSearchParams()
      searchParams.set('email', req.body.email)
      const { path } = req.query
      const data = await fetch(`${process.env.NEXT_PUBLIC_STATS_ENDPOINT}/mailing-list/${path}`, {
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
      const json = await data.json()
      res.status(200).json(json)
  } catch (error) {
      console.error(error)
      return res.status(error.status || 500).end(error.message)
    }
}