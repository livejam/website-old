const { join } = require("path");
const GitHubSlugger = require("github-slugger");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const slugger = new GitHubSlugger();
  const {
    data: { events }
  } = await graphql(`
    query EventsAll {
      events {
        id
        title
        coverImage
        streaming {
          platform
          link
        }
        description
        startsAt
        users {
          name
          avatarImage
        }
      }
    }
  `);

  events.forEach(async event => {
    const {
      data: { coverImage }
    } = await graphql(
      `
      fragment GatsbyImageSharpFluid on ImageSharpFluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }

      query LivejamCoverImageQuery {
        coverImage: file(relativePath: { eq: "` +
        event.coverImage +
        `" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }        
      }
    `
    );

    const avatarImages = event.users.map(user => {
      return graphql(
        `
        fragment GatsbyImageSharpFluid on ImageSharpFluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
  
        query LivejamAvatarImageQuery {
          avatarImage: file(relativePath: { eq: "` +
          user.avatarImage +
          `" }) {
            name
            extension
            childImageSharp {
              fluid(quality: 100, maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }        
        }
      `
      );
    });

    const allUsers = await Promise.all(avatarImages);

    const path = `events/${slugger.slug(event.title)}`;
    const component = join(__dirname, "src/components/jam.js");

    createPage({
      path,
      component,
      context: {
        event,
        coverImage,
        hosts: allUsers.map(u => ({
          name: event.users.find(
            x =>
              x.avatarImage ===
              u.data.avatarImage.name + "." + u.data.avatarImage.extension
          ).name,
          avatarImage: u.data.avatarImage
        }))
      }
    });
  });
};
