import { Input, Button } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

export default class PackageWarehouse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            packageNumber: '',
            receiver: '',
            phoneNumber: '',
            weight: ''
        }
    }
    addPackage = () =>{ 
        const newPackage = {
            packageNumber: this.state.packageNumber,
            receiver: this.state.receiver,
            phoneNumber: this.state.phoneNumber,
            weight: this.state.weight
        }
        this.props.addPackage(newPackage);
    }
    packageNumberChange = (event) => this.setState({packageNumber: event.target.value});
    receiverChange = (event) => this.setState({receiver: event.target.value});
    phoneNumberChange = (event) => this.setState({phoneNumber: event.target.value});
    weightChange = (event) => this.setState({weight: event.target.value});
    render(){
        return(
            <div>
                <p> Package Number
                    <Input placeholder="201907240001" value={this.state.packageNumber} onChange={this.packageNumberChange}/>
                </p>
                <p> Receiver
                    <Input placeholder="Woody" value={this.state.receiver} onChange={this.receiverChange}/>
                </p>
                <p> Phone Number
                    <Input placeholder="18912345678" value={this.state.phoneNumber} onChange={this.phoneNumberChange}/>
                </p>
                <p> Weight
                    <Input placeholder="3KG" value={this.state.weight} onChange={this.weightChange}/>
                </p>
                <Button type="primary" onClick={this.addPackage}>Add Package</Button>
            </div>
        );
    }
}