const axios = require('axios')

// get id
// https://discovery.meethue.com
// http://BRIDGE_IP/debug/clip.html

const BRIDGE_IP = process.env.BRIDGE_IP
const USERNAME = process.env.USERNAME_ID


// Lumion 10
https://drive.google.com/file/d/1Hf5M-Jh5an11ornwifkIeOh-COsPzZj0/view?usp=sharing
https://drive.google.com/file/d/1-WAMT3GvKM3u2Zx6K23bkL5nnJqDPPKc/view?usp=sharing
https://drive.google.com/file/d/1iQLyA_y6Gswcx7crnVWqyGAVYF_UzoZD/view?usp=sharing


const controlLight = async (lightId, on = false, bri = 254, ct = 156) => {
    const uri = `http://${BRIDGE_IP}/api/${USERNAME}/lights/${lightId}/state`
    const data = { on, bri, ct }
    try {
        return await axios.put(uri, data)
    } catch (error) {
        console.error(error)
    }
}