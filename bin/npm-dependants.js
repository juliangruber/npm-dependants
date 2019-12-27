#!/usr/bin/env node

const dependants = require('..')

const main = async () => {
  const name = process.argv[2]
  if (!name) {
    console.error('Usage: npm-dependants NAME')
    process.exit(1)
  }
  for await (const dependant of dependants(name)) {
    console.log(dependant)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
