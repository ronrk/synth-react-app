import Osc from '../components/Osc'
import { useAudioContext } from '../store/AudioContext'

const Synth = () => {
    const {audioMixer,setNewAudioMixer} = useAudioContext()

    return <>
    <button onClick={setNewAudioMixer}>Create Mixer</button>
    <Osc />
    </>
}

export default Synth