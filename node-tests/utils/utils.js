module.exports = {
  add: (a, b) => a + b,

  asyncAdd: (a, b, callback) => {
    setTimeout(() => {
      callback(a + b);
    }, 1000);
  },
  
  setName: (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
  },

  square: a => a * a,

};