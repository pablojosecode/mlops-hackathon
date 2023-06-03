import * as AWS from 'aws-sdk/global'
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

import { useEffect } from 'react';
const Sign = ({ register }) => {



    const [submitted, setSubmitted] = useState(false);

    const Divider = ({ children }) => {
        return (
            <div className="flex align-middle justify-center">
                <div className="m-auto w-full h-[.2rem] bg-black" />
                <span className="px-5">
                    {children}
                </span>
                <div className="m-auto w-full h-[.2rem] bg-black" />
            </div>
        );
    };


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
            setSubmitted(true);
        });

    }

    const LogInGoogle = (authResult) => {

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
        const email = document.querySelector(".tempUser2").value
        const code = document.querySelector(".code").value
        console.log(email + " " + code)

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
            console.log(document.querySelector(".tempPass").value);
            const username = document.querySelector(".tempUser").value
            const password = document.querySelector(".tempPass").value

            // };
            var authenticationData = {
                Username: username,
                Password: password
            };


            var authenticationDetails = new AuthenticationDetails(
                authenticationData
            );
            var poolData = {
                UserPoolId: 'us-east-1_PleNVYx78', // Your user pool id here
                ClientId: '1b83hdarelvs20mkq84vptnj4f' // Your client id here
            };
            var userPool = new CognitoUserPool(poolData);
            var userData = {
                Username: username,
                Pool: userPool,
            };
            var cognitoUser = new CognitoUser(userData);
            console.log("HI")
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    var accessToken = result.getAccessToken().getJwtToken();

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

                            if (process.env.NODE_ENV === "development") {
                                window.open("http://localhost:3000/chat", "_self")
                            }
                            else {
                                window.open("https://.vercel.app/chat", "_self")
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
        <>
            {!register ? <>
                {/* <button onClick={() => TryGetStuff()} className='w-12 h-12 bg-blue-200'>

                </button>
                <button onClick={() => SignOut()} className='w-12 h-12 bg-blue-200'> */}
                {/* 
                </button> */}
                <div className='w-full flex justify-center'>
                    <GoogleLogin
                        className="w-full"
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                            LogInGoogle(credentialResponse.credential)
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
                <Divider>Or</Divider>
                <div className='justify-center flex'>
                    <div className='w-full max-w-lg'>
                        <p className="font-['Inter']">
                            Email
                        </p>
                        <input autocapitalize="none" type='text ' className="rounded-lg font-['Inter'] text-md w-full h-10 border-2 border-slate-300 text-black tempUser">

                        </input>
                        <p className="font-['Inter']">
                            Password
                        </p>

                        <input type='password' className="rounded-lg font-['Inter'] text-md w-full h-10 border-2 border-slate-300 text-black tempPass">

                        </input>
                        <div className='w-full pt-5 '>
                            <button onClick={() => LogIn()} className="w-1/2 h-20 border-2 border-blue-800 bg-blue-400">
                                Log in
                            </button>
                        </div>
                    </div>

                </div>





            </> :
                <>
                    <div className='justify-center flex'>
                        <div className='text-5xl sm:text-2xl w-full max-w-lg'>

                            <p autocapitalize="none" className="font-['Inter']">
                                Email
                            </p>
                            <input type='text' className="font-['Inter'] sm:text-md  text-2xl w-full h-10 border-2 border-fuschia-900 text-black tempPass tempUser2">

                            </input>
                            <p className=" pt-5 sm:pt-0 font-['Inter']">
                                Password
                            </p>
                            <input type='password' className="font-['Inter'] sm:text-md text-2xl w-full h-10 border-2 border-fuschia-900 text-black tempPass tempPass2">

                            </input>
                            <div className='w-full mt-4 sm:pt-0'>
                                <button onClick={() => RegisterUser()} className="w-1/2 sm:h-20 text-3xl h-16 border-2 border-blue-800 bg-blue-400">
                                    Register
                                </button>
                            </div>

                            {submitted && <> <p className="pt-5 sm:pt-0 font-['Inter']">
                                Verification Code
                            </p>
                                <input placeholder='verification code' type='text' className="font-['Inter'] sm:text-md text-2xl w-full h-10 border-2 border-fuschia-900 text-black code">
                                </input>
                                <div className='w-full pt-5 '>


                                    <button onClick={() => ConfirmCode()} className="w-1/2 sm:h-20 text-3xl h-16 border-2 border-blue-800 bg-blue-400">
                                        Verify
                                    </button>
                                </div>
                            </>
                            }

                        </div>
                    </div>

                </>}

        </>
    )
}

export default Sign;