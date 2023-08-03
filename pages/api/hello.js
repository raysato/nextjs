export default async function handler(req, res) {
    const data = await fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
    const json = await data.json()
    res.status(200).json({ json })
}
  