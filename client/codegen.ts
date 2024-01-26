import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

module.exports = {
  schema: process.env.REACT_APP_API_URL,
  documents: ["./src/api/*.graphql"],
  overwrite: true,
  generates: {
    "./src/api/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: "@apollo/client",
      },
    },
  },
};
