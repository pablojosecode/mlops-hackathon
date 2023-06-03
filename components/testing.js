import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: "us-east-1"
})

const testing = async () => {
    const command = new GetObjectCommand({
        Bucket: "aivocals28d8fb0a-9c62-4d78-b1d9-7dd70bf00a83",
        Key: "asdfghjk.txt"
    });

    try {
        const response = await client.send(command);
        // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
        const str = await response.Body.transformToString();
        console.log(str);
    } catch (err) {
        console.error(err);
    }
};

export default testing;
