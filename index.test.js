const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

it("No news on API", async () => {
  const response = await axios.get(process.env.SWAGGER_API_DOCS_ENDPOINT);
  expect(response.data.paths).toMatchSnapshot();
});
