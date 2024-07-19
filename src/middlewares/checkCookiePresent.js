// const checkUsernameCookie = (req, res, next) => {
//     const username = req.cookies.username;
//     if (!username) {
//       return res.redirect('/login');
//     }
//     next();
//   };

const checkUsernameCookie = (req, res, next) => {
  const username = req.cookies.username;
  console.log(username);
  if (!username) {
    return res.status(401).json({ message: "Unauthorized, please log in" });
  }
  next();
};
export default checkUsernameCookie;
