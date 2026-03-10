// const authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({
//         message: `Role (${req.user.role}) is not allowed`,
//       });
//     }
//     next();
//   };
// };

// export default authorizeRoles;

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "User not found" }); // Avoid undefined error
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Insufficient role" });
    }
    //console.log("USER IN MIDDLEWARE:", req.user);
    next();
  };
};

export default authorizeRoles;
