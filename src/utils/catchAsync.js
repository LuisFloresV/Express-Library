module.exports = (fn) => {
  return (req, res) => {
    fn(req, res).catch(error => res.status(500).json({ status: 'error', message: 'Something went wrong', error }))
  }
}