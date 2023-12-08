const allMovie = async (req, res) => {
  const fetchMovie = await fetch(
    `${process.env.API_BASEURL}/discover/movie?api_key=${process.env.API_KEY}`
  );
  const data = await fetchMovie.json();
  res.json(data);
};

module.exports = {
  allMovie,
};
