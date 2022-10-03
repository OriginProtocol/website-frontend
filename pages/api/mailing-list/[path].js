export default async function handler(req, res) {
  try {
    const { path } = req.query
    if (req.method === 'POST') {
      const searchParams = new URLSearchParams()
      searchParams.set('email', req.body.email)
      const { path } = req.query
      const endpoint = `${process.env.NEXT_PUBLIC_STATS_ENDPOINT}/mailing-list/${path}`
      const data = await fetch(endpoint,
        {
          method: 'POST',
          body: searchParams
        }
      ).then((r) => r.json())
      res.status(200).json(data)
    }
    else {
      const endpoint = `${process.env.NEXT_PUBLIC_STATS_ENDPOINT}/mailing-list/${path}`
      const data = await fetch(endpoint).then((r) => r.json())
      res.status(200).json(data)
    }
  } catch (error) {
      console.error(error)
      return res.status(error.status || 500).end(error.message)
    }
}