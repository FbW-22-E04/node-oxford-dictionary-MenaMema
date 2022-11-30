const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const input = process.argv.slice(2);

const options = {
  headers: {
    app_id: process.env.APP_ID,
    app_key: process.env.APP_API_KEY,
  },
};
async function getData() {
  const response = await axios.get(
    `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${input}`,
    options
  );
  console.log(
    response.data.results[0].lexicalEntries[0].entries[0].senses[(0, 1, 2)]
      .definitions
  );
  //   console.log(
  //     response.data.results[0].lexicalEntries[0].entries[0].senses[1].definitions
  //   );
  //   console.log(
  //     response.data.results[0].lexicalEntries[0].entries[0].senses[2].definitions
  //   );
}

getData();

//console.log(process.env);
