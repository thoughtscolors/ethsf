import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GraphBar = props => {
  let { width, avatar } = props
  return (
    <div style={styles.container}>
      <div style={styles.barContainer}>
        <img style={styles.avatar} src={'http://placekitten.com/128/128'}/>
        <div style={{...styles.bar, width}}></div>
        <div style={styles.amt}>{props.amt + 'ETH'}</div>
      </div>
    </div>
  )
}

export default GraphBar

const styles = {
  container: {
    margin: 'auto',
    alignItems: 'center',
    width: '90%',
  },
  barContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginTop: '1.4vh',
  },
  bar: {
    height: '6vh',
    boxShadow: '0 6px 12px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)',
    backgroundImage: 'linear-gradient(to right, #C51162, #3F51B5)',
    borderRadius: '0 .5em .5em 0',
  },
  avatar: {
    width: '46px',
    height: '46px',
    borderRadius: '23px',
    marginRight: '1vw'
  },
  amt: {
    marginLeft: '1vw',
    color: 'rgb(80,80,80,.8)'
  }

}
