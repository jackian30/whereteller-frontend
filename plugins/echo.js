import Echo from "laravel-echo";
import defu from "defu";

window.Pusher = require("pusher-js");

export default async ({ $auth, $axios }, inject) => {
  let headers = await $auth.$storage.getCookies()["XSRF-TOKEN"];

  const echo = await new Echo({
    broadcaster: "pusher",
    key: "local", // .env
    wsHost: "localhost",
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    auth: {
      headers: {
        "X-XSRF-TOKEN": headers,
      },
    },
    authorizer: (channel, options) => {
      return {
        authorize: async (socketId, callback) => {
          let authentication = await getHeaders($auth, options);
          options.auth.headers = await authentication;

          await $axios
            .post(
              "http://localhost/api/broadcasting/auth",
              {
                socket_id: socketId,
                channel_name: channel.name,
              },
              options.auth
            )
            .then((response) => {
              callback(false, response.data);
            })
            .catch((error) => {
              callback(true, error);
            });
        },
      };
    },
  });

  await inject("echo", echo);
};

async function getHeaders($auth, options) {
  let headers = $auth.headers || {};

  if ($auth) {
    const strategy = $auth.strategy;
    if (strategy.options.name === "laravelSanctum") {
      headers.referer = location.origin;

      headers["X-XSRF-TOKEN"] = $auth.$storage.getCookies()["XSRF-TOKEN"];
    } else {
      const tokenName = strategy.options.token.name || "Authorization";
      const token = strategy.token.get();
      if (token) {
        headers[tokenName] = token;
      }
    }
  }
  return defu(headers, options.auth.headers);
}
