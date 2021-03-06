const needle = require("needle")

class Dropcontact {

	constructor(apiKey) {
		this.apiKey = apiKey
	}

	async clean(params) {
		const options = {
			json: true,
			headers: {
				"X-Access-Token": this.apiKey,
			},
		}
		const res = await needle("post", "https://api.dropcontact.io/clean", params, options)
		if (res.statusCode === 200) {
			if (res.body && typeof(res.body) === "object") {
				return res.body
			} else {
				throw "Could not parse response from Dropcontact"
			}
		} else {
			throw `Dropcontact returned HTTP ${res.statusCode}`
		}
	}

}

module.exports = Dropcontact
