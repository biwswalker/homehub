require('dotenv').config()
const axios = require('axios')

// get id
// https://discovery.meethue.com
// http://BRIDGE_IP/debug/clip.html

const BRIDGE_IP = process.env.BRIDGE_IP
const USERNAME = process.env.USERNAME_ID

const controlLight = async (lightId, on = false, bri = 254) => {
    const uri = `http://${BRIDGE_IP}/api/${USERNAME}/lights/${lightId}/state`
    const data = { on, bri }
    try {
        return await axios.put(uri, data)
    } catch (error) {
        console.error(error)
    }
}

const lightIds = [1, 2, 3, 4]

const turnOnAllLight = (isOn = false, bri = 254) => lightIds.map(id => {
    controlLight(id, isOn, bri)
})

turnOnAllLight(true, 156)