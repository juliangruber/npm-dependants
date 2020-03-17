'use strict'

const dependants = require('..')
const { ux } = require('@cto.ai/sdk')

const main = async () => {
  const { name } = await ux.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of the module to search',
      default: 'express'
    }
  ])

  for await (const dependant of dependants(name)) {
    await ux.print(dependant)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
