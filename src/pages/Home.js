import React from 'react'
import {About} from '../component/About'
import {Title} from '../component/Title'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={
            // Change this to TRUE to go to About Page
          isLoggedIn:false
        }
    }

    // constructor() {
    //     super() 
    //     this.state = {
    //         title : 'Hello',
    //         descripton : 'This is Description'
    //     }
    // }

    // render() {
    //     return (
    //         <>
    //             {/* <h1>{this.state.title}</h1>
    //             <h1>{this.state.descripton}</h1> */}

    //             <Title heading={this.state.title} desc={this.state.descripton}></Title>

    //             {/* <Title headerContent="Harsh"/>
    //             <Title headerContent="World"/>
    //             <Title headerContent="People"/> */}
    //         </>
    //     )
    // }

    // Day 5
    render()
    {
        <p>This is Home Page</p>
        return(this.state.isLoggedIn ? <h1><About/></h1> : <h1>This is Home page</h1>)
    }    
}
export default Home