import React, { Component } from 'react'

export default class Slice extends Component {
    render() {
        const {title, children, CustomImg } = this.props;
        
        const styles = {
            backgroundImage: `url(${CustomImg})`
        }
        return (
            <main style={styles}>
                <h1>{title}</h1>
                {children}
            </main>
        )
    }
}
