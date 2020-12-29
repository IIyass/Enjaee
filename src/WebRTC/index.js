import { startCallAction } from '../store/WebChat/action'
import 'webrtc-adapter'
export const createOffer = async (connection, localStream, userToCall, doOffer) => {
    try {
        connection.addStream(localStream)
        const offer = await connection.createOffer()
        await connection.setLocalDescription(offer)
        doOffer(userToCall, offer)

    } catch (exception) {
        console.error(exception)
    }
}

export const initiateLocalStream = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        return stream
    } catch (exception) {
        console.error(exception)
    }
}
export const initiateConnection = async () => {
    try {
        // using Google public stun server
        var configuration = {
            iceServers: [{ urls: 'stun:stun2.1.google.com:19302' }]
        }

        const peerConnection = new RTCPeerConnection(configuration)

        return peerConnection
    } catch (exception) {
        console.error(exception)
    }
}

export const listenToConnectionEvents = async (conn, remoteUsername, remoteVideoRef, doCandidate) => {
    conn.onicecandidate = async function (event) {
        if (event.candidate) {
            await doCandidate(remoteUsername, event.candidate)
        }
    }
    // when a remote user adds stream to the peer connection, we display it
    conn.ontrack = async function (e) {

        if (remoteVideoRef.current.srcObject !== e.streams[0]) {
            remoteVideoRef.current.srcObject = e.streams[0]
        }
    }
}

export const sendAnswer = async (conn, localStream, roomId, room, doAnswer) => {
    try {
        conn.addStream(localStream)
        conn.setRemoteDescription(room.session.offer)

        // create an answer to an offer
        const answer = await conn.createAnswer()
        conn.setLocalDescription(answer)
        const roomWithAnswer = {
            answer: {
                type: answer.type,
                sdp: answer.sdp
            }
        }
        doAnswer(roomId, roomWithAnswer)
    } catch (exception) {
        console.error(exception)
    }
}

export const startCall = (yourConn, notif) => {
    const answer = JSON.parse(notif.answer)
    yourConn.setRemoteDescription(answer);
    startCallAction()
}

export const addCandidate = (yourConn, notif) => {
    // apply the new received candidate to the connection
    const candidate = JSON.parse(notif.candidate)
    yourConn.addIceCandidate(new RTCIceCandidate(candidate))
}