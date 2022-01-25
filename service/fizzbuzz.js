class Fizzbuzz {
  constructor() {

  }

  /**
   * 
   * @param {integer} count : count should be number and received from client
   */
  getFizzBuzz(count = 100) {
    try {

      let resultSet = []
      
      for (let i = 1; i <= parseInt(count); i++) {
        if (i % 3 == 0 && i % 5 != 0)
          resultSet.push("Fizz")
        else if (i % 3 != 0 && i % 5 == 0)
          resultSet.push("Buzz")
        else if (i % 3 == 0 && i % 5 == 0)
          resultSet.push("FizzBuzz")
        else
          resultSet.push(i)
      }
      return resultSet
    } catch (error) {

    }
  }
}

module.exports = Fizzbuzz