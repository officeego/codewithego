/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    output: 'export',
    images: {
      domains: ['www.iconsdb.com'],
      unoptimized: true
    },
};

export default nextConfig;



// module.exports = {
//   images: {
//       unoptimized: true
//   }
// }

// next.config.js
// const withVideos = require('next-videos')

// module.exports = withVideos()

//original
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;