'use strict'

const dependants = require('..')
const { ux } = require('@cto.ai/sdk')

const main = async () => {
  const { name, limit } = await ux.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of the module to search',
      default: 'express'
    },
    {
      type: 'input',
      name: 'limit',
      message: 'How many modules to display at most',
      default: '10'
    }
  ])

  let displayed = 0
  for await (const dependant of dependants(name)) {
    await ux.print(dependant)
    if (++displayed === Number(limit)) break
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
