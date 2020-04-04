import React from "react"
import "./member.css"
import { Link } from "react-router-dom"


class Member extends React.Component {
    state = {
        members: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/members')
            .then(res => res.json())
            .then(data => this.setState({members: data}))
    }

    render() {
        const { members } = this.state
        const member = members.map(member => {
           return <div className="member" key={member.id}>
                <img src={member.image} alt="images" />
                <h3>{member.name}</h3>
                <p>{member.location}</p>
                <p>{member.email}</p>
            </div>
        })

        return (
            <div className="">
                <h1 className="member-div">{member}</h1>
            </div>
        )
    }

    
}

export default Member