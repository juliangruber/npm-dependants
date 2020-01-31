const fetch = require('node-fetch')
const cheerio = require('cheerio')

module.exports = name => {
  const dependants = []
  let offset = 0

  const next = async () => {
    const url = `https://npmjs.com/browse/depended/${name}?offset=${offset}`
    const res = await fetch(url)
    const html = await res.text()
    const $ = cheerio.load(html)
    $('a[href^="/package/"]').each((_, el) => {
      const dependant = $(el)
        .attr('href')
        .slice('/package/'.length)
      if (dependant !== name && !dependants.includes(dependant)) {
        dependants.push(dependant)
      }
    })
    offset += 36
  }

  return {
    [Symbol.asyncIterator]: async function * () {
      while (true) {
        if (dependants.length) {
          yield await dependants.shift()
        } else {
          await next()
          if (!dependants.length) return
        }
      }
    }
  }
}
