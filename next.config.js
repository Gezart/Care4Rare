if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_NEXT}/wp-content/uploads/2022/11/Rectangle-55.png`, // Valid WP Image domain.
    ],
  },
}