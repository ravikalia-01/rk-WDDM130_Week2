let localFunction = () => {
    // a function local to this module
};

let localMessage = '' ;

module.exports.writeMessage =(msg) => {
    localMessage = msg ;

};

module.exports.readMessage = () => {
    console.log (`${localMessage} from ${__filename}`);
};