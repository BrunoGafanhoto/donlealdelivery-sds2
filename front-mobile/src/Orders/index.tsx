
import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Children } from 'react';

import { StyleSheet, Text, View, Image, Alert, ListViewComponent, RefreshControlComponent, RefreshControl } from 'react-native';
import { FlatList, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';

import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

 function Orders() {
  

  const wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
    const [orders, setOrders] = useState<Order[]>([]);
     const [isLoading, setIsLoading] = useState(false);
    
    const isFocused = useIsFocused();
    const [refreshing, setRefreshing] = React.useState(false);
    // var isVazio = Boolean;

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
     
  
      wait(1200).then(() => setRefreshing(false));
      wait(1300).then(() => fetchData());
      
    }, []);

    

  
  
    
    const fetchData = () =>{
      
      setIsLoading(true);
          
      // if (fetchOrders.length !== 0){

   
          fetchOrders()
       
        .then(response => setOrders(response.data))
        
       
        .catch(error => Alert.alert('Houve um erro ao buscar os pedidos!'))
        
       .finally(() => setIsLoading(false) );


     
     
      }


    
    
  
  

    useEffect(() =>{
     if (isFocused){
      fetchData();
     }
    }, [isFocused]);

    const navigation = useNavigation();

     const handleOnPress = (order: Order) => {
       navigation.navigate('OrdersDetails', {
         order
       })
     }
    
  return (
    <>
    
    <Header/>
    <ScrollView style={styles.container} refreshControl={
     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    >
     
      { isLoading ?(
        <Text style={styles.subTitle}>Buscando pedidos...</Text>

      ) : (
        orders.map(order => (
          <TouchableWithoutFeedback 
          key={order.id} 
          onPress={() => handleOnPress(order)}>
            <OrderCard order={order}/>
          </TouchableWithoutFeedback>
        ))
      )}
     
     

    </ScrollView>

    </>
   
  );
}

const styles = StyleSheet.create({
  container : {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  subTitle: {
    color: '#9E9E9E',
    fontSize: 16,
    marginTop: 350,
    lineHeight: 22,
    textAlign: 'center'
  }
});


export default Orders;