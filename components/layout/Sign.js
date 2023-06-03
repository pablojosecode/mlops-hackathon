import * as AWS from 'aws-sdk/global'
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useEffect } from 'react';

const Sign = ({ visible, setRegister, register }) => {

    const [verificationCode, setVerificationCode] = useState(false);


    const Divider = ({ children }) => {
        return (
            <div className="px-5 flex align-middle justify-center">
                <div className="m-auto w-full h-[.2rem] bg-black" />
                <span className="px-5">
                    {children}
                </span>
                <div className="m-auto w-full h-[.2rem] bg-black" />
            </div>
        );
    };
    console.log(visible)

    useEffect(() => {
        // console.log(visible)
        // if (!visible){
        // console.log("SET INVISBLE")
        // document.querySelector(".tempUser2").value = "";
        // document.querySelector(".tempPass2").value = "";
        // document.querySelector(".tempUser1").value = "";
        // document.querySelector(".tempPass1").value = "";
        // document.querySelector(".code").value = "";
        // }
    }, [visible])


    const RegisterUser = () => {
        const username = document.querySelector(".tempUser2").value;
        const password = document.querySelector(".tempPass2").value;
        console.log(username + " " + password);

        var poolData = {
            UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
            ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
        };
        var userPool = new CognitoUserPool(poolData);

        var attributeList = [];

        var dataEmail = {
            Name: 'email',
            Value: username,
        };


        var attributeEmail = new CognitoUserAttribute(dataEmail);

        attributeList.push(attributeEmail);

        userPool.signUp(username, password, attributeList, null, function (
            err,
            result
        ) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            setVerificationCode(true)
        });

    }

    const LogInGoogle = (authResult) => {
        console.log("HEEEERE")

        var poolData = {
            UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
            ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
        };

        var userPool = new CognitoUserPool(poolData);


        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = 'us-east-1';

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:21b24eda-ef33-49c2-8a15-f893cdaebf8c',
            Logins: {
                'accounts.google.com': authResult
            }
        });




        // AWS.config.credentials.get(function () {

        //     // Credentials will be available when this function is called.
        //     var accessKeyId = AWS.config.credentials.accessKeyId;
        //     var secretAccessKey = AWS.config.credentials.secretAccessKey;
        //     var sessionToken = AWS.config.credentials.sessionToken;



        //     var cognitoUser = new CognitoUser(userData);

        //     authenticationDetails = new AuthenticationDetails(

        //     )
        //     console.log("HI")

        //     cognitoUser.authenticateUser(authenticationDetails, {
        //         onSuccess: function (result) {
        //             var accessToken = result.getAccessToken().getJwtToken();

        //             //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        //             AWS.config.region = 'us-east-1';

        //             AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        //                 IdentityPoolId: 'us-east-1:21b24eda-ef33-49c2-8a15-f893cdaebf8c', // your identity pool id here
        //                 Logins: {
        //                     // Change the key below according to the specific region your user pool is in.
        //                     'cognito-idp.us-east-1.amazonaws.com/us-east-1_PleNVYx78': result
        //                         .getIdToken()
        //                         .getJwtToken(),
        //                 },
        //             });

        //             //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        //             AWS.config.credentials.refresh(error => {
        //                 if (error) {
        //                     console.error(error);
        //                 } else {
        //                     // Instantiate aws sdk service objects now that the credentials have been updated.
        //                     // example: var s3 = new AWS.S3();
        //                     console.log('Successfully logged!');
        //                     if (process.env.NODE_ENV === "development") {
        //                         window.open("http://localhost:3000/User", "_self")
        //                     }
        //                     else {
        //                         window.open("https://vocalaifrontend.vercel.app/User", "_self")
        //                     }
        //                 }
        //             });
        //         },

        //         onFailure: function (err) {
        //             alert(err.message || JSON.stringify(err));
        //         },
        //     });

        // });

        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        AWS.config.credentials.refresh(error => {
            if (error) {
                console.error(error);
            } else {
                // Instantiate aws sdk service objects now that the credentials have been updated.
                // example: var s3 = new AWS.S3();
                console.log('Successfully logged H!');
                if (process.env.NODE_ENV === "development") {
                    window.open("http://localhost:3000/User", "_self")
                }
                else {
                    window.open("https://vocalaifrontend.vercel.app/User", "_self")
                }
            }
        });
    }

    const ConfirmCode = () => {
        const email = document.querySelector(".tempUser2").value;
        const code = document.querySelector(".code").value;


        var poolData = {
            UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
            ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
        };

        var userPool = new CognitoUserPool(poolData);
        var userData = {
            Username: email,
            Pool: userPool,
        };

        var cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(code, true, function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        });
    }


    // // Obtain AWS credentials
    // AWS.config.credentials.get(function () {
    //     console.log("HI")
    //     // Access AWS resources here.
    // });
    // AWS.config.credentials.refresh(error => {
    //     if (error) {
    //         console.error(error);
    //     } else {
    //         // Instantiate aws sdk service objects now that the credentials have been updated.
    //         // example: var s3 = new AWS.S3();
    //         console.log('Successfully logged!');
    //         window.open("/User")
    //     }
    // });
    const SignOut = () => {
        AWS.config.region = 'us-east-1';
        var poolData = {
            UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
            ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
        };

        var userPool = new CognitoUserPool(poolData);
        var cognitoUser = userPool.getCurrentUser();
        cognitoUser.signOut();
        console.log("SIGNE OUT");
    }

    const TryGetStuff = () => {
        // Set the region where your identity pool exists (us-east-1, eu-west-1)
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

    // const AccessToken = new CognitoAccessToken({
    //     AccessToken: accessToken,
    // });
    // const IdToken = new CognitoIdToken({ IdToken: idToken });

    // const RefreshToken = new CognitoRefreshToken({
    //     RefreshToken: idToken,
    // });

    // const sessionData = {
    //     IdToken,
    //     AccessToken,
    //     RefreshToken,
    // };

    // const userSession = new CognitoUserSession(sessionData);

    // const userData = {
    //     Username: email, // get this from token/another method
    //     Pool,
    // };

    // const cognitoUser = new CognitoUser(userData);
    // cognitoUser.setSignInUserSession(userSession);

    // cognitoUser.getSession((err, session) => {
    //     if (session.isValid()) {
    //         // access your session
    //     }
    //     // throw error
    // });




    const LogIn = () => {
        console.log("HI")

        // var authenticationData = {
        //     Username: 'pablojrhansen@gmail.com',
        //     Password: 'pablojrhansen@gmail.com1P',

        if (document.querySelector(".tempUser") && document.querySelector(".tempPass")) {
            console.log(document.querySelector(".tempUser").value);

            // };
            var authenticationData = {
                Username: document.querySelector(".tempUser").value,
                Password: document.querySelector(".tempPass").value,
            };
            console.log("THIS")
            console.log(document.querySelector(".tempUser").value);
            console.log(document.querySelector(".tempPass").value);

            var authenticationDetails = new AuthenticationDetails(
                authenticationData
            );
            var poolData = {
                UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
                ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
            };

            var userPool = new CognitoUserPool(poolData);
            var userData = {
                Username: document.querySelector(".tempUser").value,
                Pool: userPool,
            };
            var cognitoUser = new CognitoUser(userData);
            console.log("HI")

            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    var accessToken = result.getAccessToken().getJwtToken();
                    console.log(result.getIdToken())
                    // return
                    // return

                    // return;

                    //POTENTIAL: Region needs to be set if not already set previously elsewhere.
                    AWS.config.region = 'us-east-1';

                    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: 'us-east-1:21b24eda-ef33-49c2-8a15-f893cdaebf8c', // your identity pool id here
                        Logins: {
                            // Change the key below according to the specific region your user pool is in.
                            'cognito-idp.us-east-1.amazonaws.com/us-east-1_PleNVYx78': result
                                .getIdToken()
                                .getJwtToken(),
                        },
                    });

                    //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
                    AWS.config.credentials.refresh(error => {
                        if (error) {
                            console.error(error);
                        } else {
                            // Instantiate aws sdk service objects now that the credentials have been updated.
                            // example: var s3 = new AWS.S3();
                            console.log('Successfully logged!');
                            // console.log()
                            AWS.config.region = 'us-east-1';
                            var poolData = {
                                UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
                                ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
                            };

                            var userPool = new CognitoUserPool(poolData);
                            var cognitoUser = userPool.getCurrentUser();
                            console.log(cognitoUser.username)
                            // return
                            if (process.env.NODE_ENV === "development") {
                                window.open("http://localhost:3000/User", "_self")
                            }
                            else {
                                window.open("https://vocalaifrontend.vercel.app/User", "_self")
                            }
                        }
                    });
                },

                onFailure: function (err) {
                    alert(err.message || JSON.stringify(err));
                },
            });
        }
        else {
            console.log("NO")
        }
    }

    return (

        <div className='justify-center flex'>
            <div className='text-5xl sm:text-2xl w-full max-w-lg'>

                <input hidden type='text' className="px-4 rounded-md font-['Inter'] text-3xl w-full h-20 border-4 border-slate-300 text-black  tempPass tempUser2">

                </input>
            </div>
        </div>

    )
}

export default Sign;