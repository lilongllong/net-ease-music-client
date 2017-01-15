## atom snippets
```
'.source.js':
    'react-init':
        'prefix': 'reactclass'
        'body': """
            import react, { Component, PropTypes } from "react";

            export default class $1 extends Component
            {
                static PropTypes = {
                    propsName: PropTypes.string,
                };

                static defaultProps = {
                    propsName: "",
                };

                state = {

                };

                componentWillReceiveProps(nextProps)
                {

                }

                render()
                {
                    return (<div></div>);
                }
            }
        """
```
