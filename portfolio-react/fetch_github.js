const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "mahakagarwal7";
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

// Helper to handle requests
const makeRequest = (options, data = null) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let body = "";
      res.on("data", d => body += d);
      res.on("end", () => resolve({ statusCode: res.statusCode, body }));
    });
    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
};

async function main() {
  // 1. Fetch GitHub Data
  if (GITHUB_TOKEN) {
    console.log(`Fetching GitHub data for ${GITHUB_USERNAME}...`);
    const query = JSON.stringify({
      query: `
      {
        user(login:"${GITHUB_USERNAME}") { 
          pinnedItems(first: 6, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  url
                  stargazers { totalCount }
                  primaryLanguage { name color }
                }
              }
            }
          }
        }
      }`
    });

    const options = {
      hostname: "api.github.com",
      path: "/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node"
      }
    };

    try {
      const res = await makeRequest(options, query);
      if (res.statusCode === 200) {
        fs.writeFileSync("./public/profile.json", res.body);
        console.log("✅ Saved GitHub data to public/profile.json");
      } else {
        console.error(`❌ GitHub request failed with status ${res.statusCode}`);
      }
    } catch (err) {
      console.error("❌ GitHub Error:", err.message);
    }
  }

  // 2. Fetch Medium Data
  if (MEDIUM_USERNAME) {
    console.log(`Fetching Medium blogs for @${MEDIUM_USERNAME}...`);
    const options = {
      hostname: "api.rss2json.com",
      path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
      method: "GET"
    };

    try {
      const res = await makeRequest(options);
      if (res.statusCode === 200) {
        fs.writeFileSync("./public/blogs.json", res.body);
        console.log("✅ Saved Medium blogs to public/blogs.json");
      }
    } catch (err) {
      console.error("❌ Medium Error:", err.message);
    }
  }
}

main();
