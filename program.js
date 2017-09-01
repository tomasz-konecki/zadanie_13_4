var os = require('os');

process.stdin.setEncoding('utf-8');

var version = process.versions.node,
    language = process.env;

if (language.hasOwnProperty('lang')) {
    language = language.lang.substr(3, 2);
} else {
    language = 'Not defined';
}

console.log(`\nNode version: ${version}\nSystem language: ${language}\n`);

// ------------------------------------------------------------------------

process.stdin.on('readable', () => {

    var input = process.stdin.read();

    switch (input) {
        case null:
            {
                break;
            }
        default:
            {
                var instruction = input.toString()
                    .trim()
                    .toLowerCase();
                switch (instruction) {
                    case '/exit':
                        process.stdout.write('\nQuitting app...\n\n');
                        process.exit();
                    case '/sayhello':
                        process.stdout.write('\nHello!\n\n')
                        break;
                    case '/getosinfo':
                        getOSinfo();
                        break;
                    default:
                        process.stderr.write('\nWrong instruction!\n\n');
                }
            }
    };
    process.stdout.write('Enter instruction >>> ');
});

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
    console.log(`Uptime: ~${(uptime/60).toFixed()} minutes`);
    console.log(`User name: ${userInfo.username}`);
    console.log(`Home dir: ${userInfo.homedir}\n`);
}