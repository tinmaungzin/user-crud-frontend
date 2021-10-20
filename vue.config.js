module.exports = {
  devServer: {
    proxy: "http://localhost:8000/api",
    headers: { "Access-Control-Allow-Origin": "*" },
  },
};
