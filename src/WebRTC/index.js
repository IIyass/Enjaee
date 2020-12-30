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
};

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
};

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
};

export const sendOfferCall = async (localconnection,
    localstream,
    room,
    me,
    remoteVideoRef,
    doCandidate,
    doVideoOffer
) => {
    await listenToConnectionEvents(localconnection,
        room.participants.filter(e => e !== me.id)[0],
        remoteVideoRef,
        doCandidate);
    await localconnection.addStream(localstream)
    // create an an offer
    const offer = await localconnection.createOffer();
    await localconnection.setLocalDescription(offer);
    doVideoOffer(room.id, offer)
};

export const sendAnswerCall = async (localconnection,
    localstream,
    room,
    roomMetaData,
    me,
    remoteVideoRef,
    doCandidate,
    doAnswer
) => {
    await listenToConnectionEvents(localconnection,
        room.participants.filter(e => e !== me.id)[0],
        remoteVideoRef,
        doCandidate);
    await localconnection.addStream(localstream)
    const offer = JSON.parse(roomMetaData.offer)
    await localconnection.setRemoteDescription(offer)
    // create an answer to an offer
    const answer = await localconnection.createAnswer()
    await localconnection.setLocalDescription(answer)
    await doAnswer(room.id, answer)
};