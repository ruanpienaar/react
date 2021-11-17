import React from "react";
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModel  from "./OptionModel";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    handleDeleteOption = (option) => {
        this.setState((prevState) => (
            {options: prevState.options.filter((o) => o != option )}
        ));
    };
    handlePick = () => {
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        } else if ( this.state.options.indexOf(option) > -1 ) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
    componentDidMount() {
        const json_options = localStorage.getItem('options');
        try {
            const options = JSON.parse(json_options);
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length  !== this.state.options.length){
            console.log('state did change');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('component did unMount');
    }
    render(){
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModel
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}