import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '713393290322-b6mr180f74hn4vqkm70novqg94i4am35.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render(){
        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;