import * as React from 'react';

class About extends React.Component {

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">{'About'}</h1>
                    <p className="lead">{'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'}</p>
                </div>
            </div>
        );
    }

}

export default About;
