import {load} from 'cheerio'

export default defineEventHandler(async event => {
	const {query, page = 1} = getQuery(event)
	const url = `https://thehiddenbay.com/search/${query}/${page}/99/0`
	let html

	try {
		html = await $fetch(url)
	} catch (error) {
		console.error(error)
		return null
	}

	const $ = load(html)

	const torrents = $('table#searchResult tr')
		.map((_, element) => {
			const data = $(element)
				.find('font.detDesc')
				.text()
				.replace(/(Size|Uploaded)/gi, '')
				.replace(/ULed/gi, 'Uploaded')
				.split(',')
				.map(value => value.trim())
			const [dateUploaded, size] = data
			const uploadedBy = $(element).find('font.detDesc a').text()

			return {
				source: 'thehiddenbay',
				name: $(element).find('a.detLink').text(),
				size,
				dateUploaded,
				category: $(element).find('td.vertTh center a').eq(0).text(),
				seeders: $(element).find('td').eq(2).text(),
				leechers: $(element).find('td').eq(3).text(),
				uploadedBy,
				url: $(element).find('a.detLink').attr('href'),
				magnet: $(element).find('td div.detName').next().attr('href'),
			}
		})
		.toArray()
		.filter(torrent => torrent.url)

	return torrents
})
