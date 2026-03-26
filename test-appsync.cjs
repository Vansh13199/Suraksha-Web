const fetch = require('node-fetch');
fetch('https://jmvhy4clwzannjvummuqel4yy4.appsync-api.ap-south-1.amazonaws.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'da2-x244aarcpzbw3bdn4zvnm4jqfu'
    },
    body: JSON.stringify({
        query: 'mutation CreateSOSSession($input: CreateSOSSessionInput!) { createSOSSession(input: $input) { id } }',
        variables: {
            input: {
                id: 'test-session-eu-west-1',
                phoneNumber: '+919876543210',
                isActive: true,
                latitude: 0.0,
                longitude: 0.0
            }
        }
    })
}).then(res => res.text()).then(console.log);
