// Remove to prevent EACCES, permission denied  (https://github.com/tomitrescak/meteor-uploads/issues/44)
//Meteor.startup(function() {
//    UploadServer.init({
//        tmpDir: process.env.PWD + '/.uploads/tmp',
//        uploadDir: process.env.PWD + '.uploads/',
//        checkCreateDirectories: true //create the directories for me
//    })
//});