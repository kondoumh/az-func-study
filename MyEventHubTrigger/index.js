module.exports = function (context, myEventHubMessage) {
    context.log('Function triggered to process a message: ', myEventHubMessage);
    context.log('EnqueuedTimeUtc =', context.bindingData.enqueuedTimeUtc);
    context.log('SequenceNumber =', context.bindingData.sequenceNumber);
    context.log('Offset =', context.bindingData.offset);

    context.done();
};

// module.exports = async function (context, eventHubMessages) {
//     context.log(`JavaScript eventhub trigger function called for message array ${eventHubMessages}`);
    
//     eventHubMessages.forEach((message, index) => {
//         context.log(`Processed message ${message}`);
//     });
// };
