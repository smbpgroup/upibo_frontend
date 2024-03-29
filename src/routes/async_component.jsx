import React from 'react';

export default (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    // componentWillMount() {
    //   if( (localStorage.getItem('token') !== undefined && localStorage.getItem('token') != null) || this.props.location.pathname == '/login'){
    //     if (!this.state.Component) {
    //       loader().then((Component) => {
    //         AsyncComponent.Component = Component;
    //         this.setState({ Component });
    //       });
    //     }  
    //   }
    // }
    componentWillMount() {
      if (!this.state.Component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      if (this.state.Component) {
        return (
          <this.state.Component { ...this.props } { ...collection } />
        )
      }
      return null;
    }
  }
);