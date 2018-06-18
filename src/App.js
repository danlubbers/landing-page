import React, { Component } from 'react';
import './App.css';
import Logo from './logo/danlubbers-logo.png';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  constructor(props) {
    super(props) 
      
      // this.state = {
      //   showLinks: false
      // }
      // this.handleOver = this.handleOver.bind(this);
    }

    componentDidMount() {
      this.aos = AOS;
      this.aos.init({duration: 3000});
  }

    // handleOver() {
    // this.setState({showLinks: !this.state.showLinks})
    // }

  render() {

    // let {showLinks} = this.state;
    // let slideCSS = showLinks ? 'show-link show-position' : 'show-link';

    return (
      <div className="content">
        <img className='logo' src={Logo} alt='logo' />
        <div className='btn-container'>
          <a href='http://www.danlubbersphotographs.com'><button className='photoBtn' data-aos='zoom-in'>Photography / Retouching</button></a>
          <a href='http://webdev.danlubbers.com'><button className='webDevBtn' data-aos='zoom-in'>Web Development</button></a>
        </div>
      </div>
    );
  }
}

export default App;
