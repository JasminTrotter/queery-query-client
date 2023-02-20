/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    QUEERY_QUERY_API_URL: process.env.QUEERY_QUERY_API_URL,
  }
}

module.exports = nextConfig
