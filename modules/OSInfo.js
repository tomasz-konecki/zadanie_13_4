var os = require('os'),
    time = require('./timeFormat');

function getOSinfo() {
    var type = os.type(),
        release = os.release(),
        cpu = os.cpus()[0].model,
        uptime = os.uptime(),
        userInfo = os.userInfo();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }

    console.log(`\nSystem: ${type}`);
    console.log(`Release: ${release}`);
    console.log(`CPU model: ${cpu}`);
    console.log(`Uptime [hh:mm:ss]: ${time.newTime(uptime)}`);
    console.log(`User name: ${userInfo.username}`);
    console.log(`Home dir: ${userInfo.homedir}\n`);
}

exports.print = getOSinfo;