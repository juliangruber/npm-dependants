const dependants = require('.')

const main = async () => {
  for await (const dependant of dependants('express')) {
    console.log(dependant)
  }
}

main()
