module.exports = async function (context, documents) {
    if (!!documents && documents.length > 0) {
        context.log('Documents modified: ', documents.length);
        context.log('Document Id: ', documents[0].id);

        context.bindings.outputEventHubMessage = "Message created for ID: " + documents[0].id;
        context.done();
    }
}
