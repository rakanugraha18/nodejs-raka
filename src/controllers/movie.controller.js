const allMovie = async (req, res) => {
  const fetchMovie = await fetch(
    `${process.env.API_BASEURL}/discover/movie?api_key=${process.env.API_KEY}`
  );
  const data = await fetchMovie.json();
  res.json(data);
};

const singleMovie = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const fetchMovie = await fetch(
    `${process.env.API_BASEURL}/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const data = await fetchMovie.json();
  res.json(data);
};

module.exports = {
  allMovie,
  singleMovie,
};
