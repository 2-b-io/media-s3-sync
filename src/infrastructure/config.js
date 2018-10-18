export default {
  version: process.env.VERSION,
  aws: {
    s3: {
      bucket: process.env.AWS_S3_BUCKET,
      region: process.env.AWS_S3_REGION,
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
    },
    elasticSearch: {
      host: process.env.AWS_ELASTIC_SEARCH_HOST,
      prefix: process.env.AWS_ELASTIC_SEARCH_PREFIX
    }
  }
}
