const { execSync } = require('child_process')

const screenshot = () => {
	execSync('cat ./artifacts/screenshot-0.png')
}

module.exports = { screenshot }