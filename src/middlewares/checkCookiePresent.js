// const checkUsernameCookie = (req, res, next) => {
//     const username = req.cookies.username;
//     if (!username) {
//       return res.redirect('/login');
//     }
//     next();
//   };

const checkUsernameCookie = (req, res, next) => {
  const username = req.cookies.username;
  console.log(username + " Hello From Here");
  if (!username) {
    // return res.status(401).json({ message: "Unauthorized, please log in" }).redirect("/login");
    console.log({ message: "Unauthorized, please log in" });
    return res.redirect("/login");
  }
  next();
};
export default checkUsernameCookie;
