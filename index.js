// parent function
function createLoginTracker(){
  // object containing login details
  const userInfo = {
    username: "Lincon Mwangi",
    password: "12345"
  }
  let attemptCount = 0;

  const loginTracker = (passwordAttempt) => {
    // Increases the login attempt counter by 1 for each password submission
    attemptCount ++;
    //conditional statement for exceeding 3 limits
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts"
    }
    //conditional statement to check if passwordAttempt matches userInfo
    if (passwordAttempt == userInfo.password) {
      return "Login Successfull"
    }
    else {
      return "Login Failed"
    }
  }
    return loginTracker()
}
let loginTest = createLoginTracker()
 
console.log(loginTest(12345))



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};