// network.js : PeerJS et synchronisation
export function setupPeer(isHost, onReady) {
  const peer = new Peer();
  peer.on('open', id => {
    console.log("PeerJS ID:", id);
    if (onReady) onReady(peer, id);
  });
}

export function onNetworkEvent(callback) {
  // placeholder
}
