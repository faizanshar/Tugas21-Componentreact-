import React from 'react'
import {  Text , StyleSheet , Image, ScrollView, TextInput, Button, Alert, ActivityIndicator,Switch} from 'react-native'

const App = () => {
  return (
    <ScrollView style= {{backgroundColor: "black", flex:10}}>
    <Image 
        style= {styles.tinyLogo}
        source= {require('./Image/lalala.png')}/>
    <Text style= {styles.Text}>Muhammad Faiz Ansharullah</Text>
    <Image 
        style= {styles.faiz}
        source= {require('./Image/faiz.jpg')}/>
    <Text style= {styles.biodata}>Biodata :</Text>
    <Text style= {styles.nama}>Nama : Muhammad Faiz Ansharullah</Text>
    <Text style= {styles.ttl}>Ttl : Depok, 4 April 2003</Text>
    <Text style= {styles.hobi}>Hobi : Ngoding,Game,Nonton</Text>  
    <Text style= {styles.kisah}>Kisah Singkat Nabi Yusuf</Text>     
    <Text style= {styles.yusuf}>
    Nabi yusuf Alaihisalam merupakan salah satu dari Nabi ALLAH yang dituliskan kisahnya dalam Al Quran, salah satu dari 25 nabi dan rasul yang wajib kita imani yang terkenalakan ketampanan dan kecerdasannya. Nabi yusuf merupakan Nabi dari kalangan Bani Israil, merupakan anak bungsu dan kesayangan dari Nabi Yaqub Alaihi salam. ketika dalam perjalanan ia dimasukkan ke dalam sumur oleh saudara-saudaranya karena mereka iri kepada Nabi Yusuf. Kemudian dipungut olehseorang musafir dan dijual kepada penguasa Mesir. Karena ketampanannya ia difitnah berzina oleh istri sang raja. Kemudian dimasukkan kedalam penjara. Didalam penjara ia terus berdakwah. Kemudian raja bermimpi tentang tujuh kurus emmakan tujuh sapi gemuk. Atas kecerdasannya nabi yusuf kemudian menafsirkan mempi itu bahwa mesir akan mengalami kekeringan dan harus bersiap. Akhirnya  ia dijadikan menteri yang mengurusi administrasi negara dan hidup dalam kekayaan. 
    </Text> 
    <TextInput style= {styles.input} placeholder= "Silahkan Nilai nya berapa"/> 
    <Button 
        style= {styles.button}
        title= "Pencet sini!"
        onPress= {()=> Alert.alert("Terimakasih Penilaian nya")}/>        
    <ActivityIndicator size= "small" color="white"/>
    <Switch style={{color:"blue"}}/>
    </ScrollView>
  )
}
export default App;

const styles = StyleSheet.create({
    Text : {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop : 30
    },
    tinyLogo :{
        width : 200,
        height : 200,
        marginLeft: 80,
        marginTop : 50

    },
    faiz :{
        width : 100,
        height : 100,
        marginLeft: 125,
        marginTop: 30

    },
    biodata: {
        color: 'white',
        fontWeight: "bold",
        marginTop : 50,
        fontSize: 20

    },
    nama : {
        color: 'white',
        fontWeight: 'bold',
    },
    ttl: {
        color: 'white',
        fontWeight: 'bold',
        
    },
    hobi: {
        color: 'white',
        fontWeight: 'bold',
        
    },
    kisah: {
        color: 'white',
        fontWeight: 'bold',
        fontSize : 30,
        marginLeft : 30,
        marginTop: 30
    },
    yusuf : {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 70
    },
    input: {
        backgroundColor : "white",
        marginBottom : 10    
    },
    
    
});



