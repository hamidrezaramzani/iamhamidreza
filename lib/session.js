const { withIronSession } = require("next-iron-session");
export default function withSession(handler) {    
  return withIronSession(handler, {
    password: process.env.SESSION_PASSWORD,
    cookieName: "iamhamidrezaramzani",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
  });
}
