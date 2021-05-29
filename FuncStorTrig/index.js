module.exports = async function (context, msgQueue) {
    context.log('JavaScript queue trigger Funciton processed the message :: ', msgQueue);
};