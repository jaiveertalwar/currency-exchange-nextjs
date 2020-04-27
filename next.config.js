import { API_KEY } from "./env"
const isProd = process.env.NODE_ENV === "production"

const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    disable: !isProd,
    dest: "public",
  },
})

// module.exports = {
//   env: {
//     API_KEY: API_KEY,
//   },
// }
