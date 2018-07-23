module.exports = {
  siteMetadata: {
	title: 'Design+Code 3',
	description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
	keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '0ge8xzmnbp2c',
        accessToken: 'b3b275d4fda32085546b9100cb9ae7cb8796fdddd462fd42ba53c4c17bf2f99d'
      }
    }
  ],
}