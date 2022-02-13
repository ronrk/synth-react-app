import { useState } from "react"
import { useAudioContext } from "../store/AudioContext"
import { startOsc,setOscType, } from "../lib/web-audio-api"

const OscItem = (props) => {
    const {changeGain} = useAudioContext()
    const {osc} = props
    const [isPlaying,setIsPlaying] = useState(false)




    const handleSetGain = (e) => {
        changeGain(osc.id,e.target.value)
    }
const handleSetType = (e) => {
    console.log(e.target)
}

    const handlePlayOsc = () => {
        if(isPlaying){
            setIsPlaying(false)
            osc.osc.stop()
        } else {
            setIsPlaying(true)
            osc.osc.start()
        }
    }
    


    return <div> Osc{osc.id} 
    <button onClick={handlePlayOsc}>{`${isPlaying ? 'Stop' : 'Play'}`}</button>
    <input type='range' min='0' max='2' step='0.1' value={osc.gain.gain.value}  onChange={handleSetGain} />
    <button onClick={handleSetType}>waveform</button>
    <button></button>
    <button></button>
    <button></button>
    </div>
}

export default OscItem