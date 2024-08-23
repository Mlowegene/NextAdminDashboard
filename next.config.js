/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/', // The path you want to redirect from
            destination: '/dashboard', // The path you want to redirect to
            permanent: true, // This indicates whether the redirect is permanent (301) or temporary (302)
          },
        ];
      },
}

module.exports = nextConfig
