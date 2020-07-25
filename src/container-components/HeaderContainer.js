import React from 'react';
import { connect } from 'react-redux';

function HeaderContainer(props) {
  return (
    <header className='main-head'>Logo</header>
  )
}

export default connect()(HeaderContainer);