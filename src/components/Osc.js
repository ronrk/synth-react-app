import OscItem from "./OscItem"

import { useAudioContext } from "../store/AudioContext"

const Osc = () => {
    const {setNewOsc,oscs} = useAudioContext()
    if(oscs.length > 0) {
        return <div>{oscs.map(item => <OscItem key={item.id} osc={item} />)}
        <button onClick={setNewOsc}>Create new osc</button></div>
    }
    return <button onClick={setNewOsc}>Create new osc</button>
}

export default Osc