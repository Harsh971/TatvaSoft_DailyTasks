import React from 'react'
import {Title} from '../component/Title'

class Home extends React.Component {
    constructor() {
        super() 
        this.state = {
            title : 'Hello',
            descripton : 'This is Description'
        }
    }
    render() {
        return (
            <>
                {/* <h1>{this.state.title}</h1>
                <h1>{this.state.descripton}</h1> */}

                <Title heading={this.state.title} desc={this.state.descripton}></Title>

                {/* <Title headerContent="Harsh"/>
                <Title headerContent="World"/>
                <Title headerContent="People"/> */}
            </>
        )
    }
}
export default Home