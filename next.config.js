const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "sg-budget-breakdown";
let basePath = "/sg-budget-breakdown";

let repo;
if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
};

module.exports = nextConfig;
