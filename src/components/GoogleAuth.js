import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '39798977840-kq5seci10fjs47lttkhpdtc0ei98rnes.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
};

export default GoogleAuth;
