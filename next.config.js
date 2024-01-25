/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns :[
            {
                protocol : 'https',
                hostname: "images.pexels.com"
            },{
                protocol : 'https',
                hostname: "media.wired.com"
            },
            {
                protocol : 'https',
                hostname: "avatars.githubusercontent.com"
            }
        ]
    }   
}

module.exports = nextConfig
