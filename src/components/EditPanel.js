import React, { Component } from 'react'

export default class EditPanel extends Component {

    state = {
        isIndefinite: false,
        item: this.props.editItem
    }

    componentWillMount=()=>{
        if(this.props.editItem.indefinite){
            this.setState({
                isIndefinite: true
            })
        }
    }

    componentWillReceiveProps=(nextProps)=>{
        if(this.props!==nextProps){
            document.getElementById('editForm').reset();
            this.setState({
                isIndefinite: nextProps.editItem.indefinite
            })
        }
    }

    handleChange  = (e) => {
        console.log(e.target.value)
        const item = this.state.item;
        item[e.target.name] = e.target.value;
        this.setState({
            item
        })
    }

    render(){


        let item = this.props.editItem;
        const key = this.props.editKey;


        return (
        <div className="editPanel">
            <form 
            ref={(input) => this.editTodoForm = input} 
            id='editForm'
            // onSubmit={(e) => this.editTodo(e)}
            >
                <span>
                    <label>To Do: </label>
                    <input ref={(input) => this.heading = input} type="text" name="heading" defaultValue={item.heading} onChange={(e)=>this.handleChange(e)}/>
                </span>
                <span>
                    <label>Due Date: </label>
                    <input disabled={this.state.isIndefinite} type="text" ref={(input) => this.dueDate = input} name="dueDate" defaultValue={item.dueDate} onChange={(e)=>this.handleChange(e)}/> 
                    <br/>or 
                    <br/> 
                    Indefinite: 
                    <input type="checkbox" onClick={()=>!item.indefinite} ref={(input) => this.indefinite = input} name="indefinite" defaultChecked={item.indefinite} onChange={(e)=>this.handleChange(e)}/>
                </span>
                <span>
                    <label>Due Time: </label>   
                    <input disabled={this.state.isIndefinite} type="text" ref={(input) => this.dueTime = input} name="dueTime" defaultValue={item.dueTime} onChange={(e)=>this.handleChange(e)}/>
                </span>
                <span>
                    <label>Location: </label>
                    <input type="text" ref={(input) => this.location = input} name="location" defaultValue={item.location} onChange={(e)=>this.handleChange(e)} />
                </span>   
                <button type="submit">EDIT</button>           
            </form>
        </div>
        )
    }
}
