export default async function handler(req, res) {
  try {
      const { path } = req.query
      const data = await fetch(`${process.env.NEXT_PUBLIC_STATS_ENDPOINT}/mailing-list/${path}`).then((r) => console.log(r))
      res.status(200).json(data)
  } catch (error) {
      console.error(error)
      return res.status(error.status || 500).end(error.message)
    }
}