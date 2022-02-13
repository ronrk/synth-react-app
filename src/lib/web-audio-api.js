export const createOsc = (context) => {
    const osc = context.createOscillator()
    const gain = context.createGain()
    osc.connect(gain)
    gain.connect(context.destination)
    return { osc, gain }
}

export const createAudioContext = () => {
    const context = new AudioContext()
    return context
}

export const startOsc = (osc) => {
    return osc.start()
}

export const setOscType = (osc, newType) => {
    osc.type = newType
}