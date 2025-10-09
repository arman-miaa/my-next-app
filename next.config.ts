import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // images: {
  //   remotePatterns: [
  //     new URL('https://cdn-media-1.freecodecamp.org/images/1*uIepZ6YWTubeVxD5n5kkyg.png'),
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      
      },
    ],
  },
};


export default nextConfig;
