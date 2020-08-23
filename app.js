const dgram = require('dgram');
const ip = '0.0.0.0'; // IP met .255 op einde voor multicast address, luister op alle IP adressen van de machine met 0.0.0.0
const socket = dgram.createSocket('udp4');
const portrx = 3333;

socket.on('message', (data) => {
    console.log(data.toString());
})

socket.bind(portrx,ip);