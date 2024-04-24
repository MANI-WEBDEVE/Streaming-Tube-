import crypto from 'crypto'



// Generate a random buffer of 32 bytes (256 bits)
const secret = crypto.randomBytes(32).toString('hex');

console.log("ACCESS_TOKEN_SECRET:", secret);
