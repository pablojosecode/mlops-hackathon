import * as AWS from 'aws-sdk/global'
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

const SignOut = () => {
    AWS.config.region = 'us-east-1';
    var poolData = {
        UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
        ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
    };

    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();
    cognitoUser.signOut();
    console.log("SIGNED OUT");
    if (process.env.NODE_ENV === "development") {
        window.open("http://localhost:3000", "_self");
    }
    else{
        window.open("https://mlops-hackathon-txt4.vercel.app/", "_self")
    }

}
export default SignOut;