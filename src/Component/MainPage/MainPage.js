import { Table, Divider, Tag, Menu, Icon } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
            {
                title: "Package No.",
                dataIndex: "packageNumber",
                key: "packageNumber"
            },
            {
                title: "Receiver",
                dataIndex: "receiver",
                key: "receiver"
            },
            {
                title: "Phone",
                dataIndex: "phoneNumber",
                key: "phoneNumber"
            },
            {
                title: "Status",
                dataIndex: "status",
                key: "status"
            },
            {
                title: "Booking Time",
                dataIndex: "bookingTime",
                key: "bookingTime"
            }
        ]
        }
    }
    handleClick = e => {
        this.props.filterTypeChanged(e.key);
    };

    render(){
        return(
            <div id="containerID" class="container">
                <h2>Mini Package</h2>
                <Menu onClick={this.handleClick} selectedKeys={this.props.filterType} mode="horizontal">
                    <Menu.Item key="all">
                        <Icon type="filter" />All
                    </Menu.Item>
                    <Menu.Item key="booked">
                        <Icon type="filter" />Booked
                    </Menu.Item>
                    <Menu.Item key="picked">
                        <Icon type="filter" />Picked
                    </Menu.Item>
                    <Menu.Item key="">
                        <Icon type="filter" />Not Booking
                    </Menu.Item>
                </Menu>

                <Table columns={this.state.columns}></Table>
                
            </div>
        );
    }
}