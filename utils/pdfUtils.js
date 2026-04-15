const pdf = require('pdf-parse');

async function parsePDF(buffer) {
    return await pdf(buffer);   // ✅ simple & works
}

module.exports = { parsePDF };