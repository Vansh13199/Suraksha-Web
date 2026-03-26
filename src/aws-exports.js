/* eslint-disable */
// AWS Amplify configuration for Suraksha Website

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_appsync_graphqlEndpoint": "https://jmvhy4clwzannjvummuqel4yy4.appsync-api.ap-south-1.amazonaws.com/graphql",
    "aws_appsync_region": "ap-south-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-d7jy5zhphfasne4xnil3vbjc4u",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_iFJ06Qql9",
    "aws_user_pools_web_client_id": "3qqf9oks1m83c0vbhk7mqlvlqr",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "PHONE_NUMBER"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "PHONE_NUMBER"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 6,
        "passwordPolicyCharacters": [
            "REQUIRES_NUMBERS"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "PHONE_NUMBER"
    ]
};

export default awsmobile;
