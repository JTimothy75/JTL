const AWS = require('aws-sdk');

// Create object upload promise
const awsBucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2'
});

const awsUpload = async (file, name) => {
  try {
    // Create params for putObject call
    const objectParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: name,
      Body: file,
      ACL: 'public-read'
    };

    awsBucket.putObject(objectParams).promise();
  } catch (err) {
    if (err) {
      return false;
    }
  }

  return true;
};

module.exports = awsUpload;
