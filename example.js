const dependants = require('.')

const main = async () => {
  const name = process.argv[2] || 'express'
  for await (const dependant of dependants(name)) {
    console.log(dependant)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
