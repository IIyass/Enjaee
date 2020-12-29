import { useEffect, useState, useRef } from 'react';
import {
    initiateConnection,
    initiateLocalStream,
} from '../WebRTC'

const useVideoRoom = () => {
    const [localconnection, setLocalConnection] = useState();
    const [localstream, setLocalStrean] = useState();
    let localVideoRef = useRef(null);

    useEffect(() => {
        async function LocalStream() {
            const localStream = await initiateLocalStream();
            localVideoRef.current.srcObject = localStream;
            setLocalStrean(localStream)
        }
        async function localConnection() {
            const localConnection = await initiateConnection();
            setLocalConnection(localConnection)
        }
        localConnection();
        LocalStream();
    }, [localstream, localconnection, localVideoRef]);

    return [localconnection, localstream, localVideoRef]
}

export default useVideoRoom;