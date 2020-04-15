import React from 'react'

class LifecycleScreen extends React.Component{

    componentDidMount(){
        alert("Component did mount")
    }
    render(){
        return(
        <div>
            <h1>hallo sayang</h1>
        </div>
        )
    }
}

export default LifecycleScreen