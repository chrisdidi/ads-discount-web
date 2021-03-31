module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "ads-discount-web",
      url: "http://localhost:4000/graphql",
    },
  },
};
