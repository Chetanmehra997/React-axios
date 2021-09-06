import React, { Component } from 'react'
import axios from "axios";

 class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[],
            name:'',
        }
    }
       handleChange=(e)=>{
           this.setState({
               [e.target.name]: e.target.value
           })
       }
        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
                console.log(res.data);
                this.setState({data:res.data})
            })

            
        }



       handleSubmit=(e)=> {
           e.preventDefault()
           axios.post('https://jsonplaceholder.typicode.com/users/1/posts',this.state)
           .then(response=>{
            
               console.log(response.data)
           })
       }


    render() {
     const {username}=this.state
          return(
              
                  <div>
                      <form onSubmit={this.handleSubmit}>
                          <div>
                              <input
                              username='name'
                              onChange={this.handleChange}
                              ></input>
                          </div>
                      </form>
                      <div>
                          <ul>
                              {this.state.data.map(item=> <li key={item.id}>{item.name}</li>)}
                          </ul>
                      </div>
                  </div>
              
          
          )
        
        
    }
}

export default Dashboard



