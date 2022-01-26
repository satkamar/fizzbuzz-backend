class Fizzbuzz {
  constructor() {

  }

  /**
   * 
   * @param {integer} count : count should be number and received from client
   */
  getFizzBuzz(count = 100) {
    try {
      
      // Check: is count interger or string
      if(isNaN(count)) 
        throw {status: 417, message: "Expecting integer value"}
      else {
        let resultSet = []

        // Iterate the loop till count given by user and generate the array
        for (var i = 1; i <= parseInt(count); i++) {
          let mod3 = i % 3 == 0, mod5 = i % 5 == 0;
          resultSet.push(mod3 ? (mod5 ? "FizzBuzz" : "Fizz") : (mod5 ? "Buzz" : i));
        }
        return resultSet
      }
      
    } catch (error) {
      throw error
    }
  }
}

module.exports = Fizzbuzz