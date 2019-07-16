import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

// import components
import Header from "./component/common/Header";

// created components
import LoginForm from "./component/LoginForm";
import Button from "./component/common/Button";
import CardItem from './component/common/CardItem';
import Spinner from "./component/common/Spinner";

class Apps extends Component {

  state = { 
    loggedIn: null
   }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAArvMGlKF93fXjHmMHmrtYjt0eQixh3u8",
      authDomain: "firstreact-native.firebaseapp.com",
      databaseURL: "https://firstreact-native.firebaseio.com",
      projectId: "firstreact-native",
      storageBucket: "",
      messagingSenderId: "99417422280",
      appId: "1:99417422280:web:4a83f1ee809d61b5"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          loggedIn: true
        });
      }else{
        this.setState({
          loggedIn: false
        })
      }
    });
  }

  buttonPress(){
    firebase.auth().signOut();
  }

  renderContent () {

    switch(this.state.loggedIn){
      case true: return (
        <CardItem>
          <Button onPress={this.buttonPress.bind(this)}>
            Log Out
          </Button>
        </CardItem>
      );

      case false: return (
        <LoginForm />
      )

      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText={"Login"} />
        {this.renderContent()}
      </View>
    );
  }
}

export default Apps;
