import { View, Text, TextInput, Button, Keyboard } from 'react-native';
import React, {useState} from 'react';
import { firebase } from './firebase.js';

const Ingredient = () => {
    const ingredients = firebase.firestore().collection('ingredients');
    const [addIngredient, setAddIngredient] = useState('');
    const [addIngredientCost, setAddIngredientCost] = useState('');

    const addField = () => {
        if (addIngredient && addIngredient.length > 0){
            const data = {
                name: addIngredient,
                cost: addIngredientCost
            };
            ingredients
                .add(data)
                .then(() => {
                    setAddIngredient('');
                    setAddIngredientCost('');
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
        }
    }


    return (
        <View>
            <View>
                <TextInput 
                    placeholder='Add ingredient'
                    placeholderTextColor= '#ADD8E6'
                    onChangeText={(heading) => setAddIngredient(heading)}
                    value={addIngredient}  
                />
                <TextInput 
                    placeholder='Add cost'
                    placeholderTextColor= '#ADD8E6'
                    onChangeText={(heading) => setAddIngredientCost(heading)}
                    value={addIngredientCost}  
                />
                <Button title='Submit' onPress={addField}/>
            </View>
        </View>
    )
}

export default Ingredient