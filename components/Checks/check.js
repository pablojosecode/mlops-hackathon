

import * as AWS from 'aws-sdk/global'
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

const check = () => {
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
                return;
            }
            console.log('session validity: ' + session.isValid());

            // NOTE: getSession must be called to authenticate user before calling getUserAttributes
            cognitoUser.getUserAttributes(function (err, attributes) {
                if (err) {
                    console.log("FUCK ERROR")
                } else {
                    if (process.env.NODE_ENV === "development") {
                        window.open("http://localhost:3000/chat", "_self")
                    }
                    else {
                        window.open("https:///User", "_self")
                    }
                    console.log("FUCK SUCCESS")
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

            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
        });
    }
    else {
        console.log("NOBODY LOGGED IN")
    }
}
export default check;