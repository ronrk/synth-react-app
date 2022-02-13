import { ADD_OSC, CREATE_MIXER, SET_GAIN } from "../action"
import { createOsc, createAudioContext } from "../lib/web-audio-api"


export const oscReducer = (state, action) => {
    if (action.type === SET_GAIN) {
        const { id, value } = action.payload
        const existOsc = state.oscs.find(item => item.id === id)
        const newGain = value
        console.log(state)
        return {...state,
            oscs: [...state.oscs, {...state.oscs[id], gain: {...state.oscs[id].gain, gain: {...state.oscs[id] } } }]
        }
    }
    if (action.type === CREATE_MIXER) {

        const mixer = createAudioContext()
        return {...state, audioMixer: mixer }
    }
    if (action.type === ADD_OSC) {
        const id = state.numId + 1
        const { osc, gain } = createOsc(state.audioMixer)
        const oscillator = { id, osc, gain }
        return {...state, numId: id, oscs: [...state.oscs, {...oscillator, gain }] }
    }
    return state
}