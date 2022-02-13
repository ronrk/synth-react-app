import React,{useState,useContext,useReducer} from 'react'

import { ADD_OSC,CREATE_MIXER,SET_GAIN } from '../action'

import { createAudioContext,createGain,createOsc } from '../lib/web-audio-api'
import { oscReducer } from '../reducers/osc-reducer'

const AudioContext = React.createContext()

let numId = 0

export
const AudioProvider = ({ children }) => {
    const [state,dispatch] = useReducer(oscReducer,{oscs:[],audioMixer:null,numId:0})

    const setNewAudioMixer = () => {
        dispatch({type:CREATE_MIXER})
    }

    const setNewOsc = () => {
        dispatch({type:ADD_OSC})

    }

    const changeGain = (id,value) => {
        dispatch({type:SET_GAIN,payload:{id,value}})
    }

return (<AudioContext.Provider value={{...state,setNewAudioMixer,setNewOsc,changeGain}}>{children}</AudioContext.Provider>)
}

export const useAudioContext = () => {
  return useContext(AudioContext);
};