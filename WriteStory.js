import * as React from 'react';
import { render } from 'react-dom';
import { TextInput , Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import {db} from '../config';
import {firebase} from 'firebase';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function WriteScreen() {

  constructor(props);{
    super(props);
    this.setState = {
      title: '',
      author: '',
      storyText: ''
    }
  }

  submitStory = () => {
    db.collection('stories').add({
      title : this.state.title,
      author : this.state.author,
      storyText : this.state.storyText
    })
  }

  render();{
  return (
 <View>  

<Header
backgroundColor = {'green'}
 centerComponent = {{
    text : 'Story Hub',
    style : { color: 'black', fontSize: 30}
}}
/>

<TextInput 
placeholder="Story Title"
placeholderTextColor='black'
onChangeText= {(text)=>{
this.setState({
title: text
})
}}
value={this.state.title}
style={styles.title}/>
<TextInput
placeholder="Author"
 placeholderTextColor='black'
 onChangeText= {(text)=>{
this.setState({
author: text
})
}}
 value={this.state.author}
style={styles.author} />
<TextInput 
placeholder="Write your story"
placeholderTextColor='black'
onChangeText= {(text)=>{
this.setState({
storyText: text
})
}}
value={this.state.storyText}
style={styles.storyText}
multiline={true}/>

<TouchableOpacity 
style = {styles.submitButton}
onPress={submitStory}>
<Text>Submit</Text>
</TouchableOpacity>
    </View> 
  );
};
}

const styles = StyleSheet.create({
submitButton:{  justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'aquamarine',
      width: 80,
      height: 40,color:'black',}
});

