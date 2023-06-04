

import * as AWS from 'aws-sdk/global'
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

const check2 = () => {
    console.log("TESTING")
    AWS.config.region = 'us-east-1';
    var poolData = {
        UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
        ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
    };

    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();

    console.log("TYING")
    if (cognitoUser != null) {
        cognitoUser.getSession(function (err, session) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return false;
            }
            console.log('session validity: ' + session.isValid());
            console.log(session.idToken.payload['cognito:username'])

            // NOTE: getSession must be called to authenticate user before calling getUserAttributes
            cognitoUser.getUserAttributes(function (err, attributes) {
                if (err) {
                    console.log("FUCK ERROR")
                    if (process.env.NODE_ENV === "development") {
                        window.open("http://localhost:3000", "_self")
                    }
                    else {
                        window.open("https://mlops-hackathon-txt4.vercel.app", "_self")
                    }
                    return false;
                } else {
                    return true;
                }
            });

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:21b24eda-ef33-49c2-8a15-f893cdaebf8c', // your identity pool id here
                Logins: {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.us-east-1.amazonaws.com/us-east-1:21b24eda-ef33-49c2-8a15-f893cdaebf8c': session
                        .getIdToken()
                        .getJwtToken(),
                },
            });
            console.log("TRUE")
            return true;

            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
        });
    }
    else {
        console.log("NOBODY LOGGED IN")
        if (process.env.NODE_ENV === "development") {
            window.open("http://localhost:3000", "_self")
        }
        else {
            window.open("https://mlops-hackathon-txt4.vercel.app", "_self")
        }
        return false;
    }
    // window.open("https://vocalaifrontend.vercel.app", "_self")

    return false;
}
export default check2;