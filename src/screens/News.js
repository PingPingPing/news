import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNews, fetchNewsById} from '../actions/newsActions';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {data, loading} = useSelector(state => state);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size={'small'} color={'blue'} />
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          initialNumToRender={20}
          onEndReached={() => console.log('end')}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: 'lightblue',
                  width: '100%',
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('NewsItem', item)}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default NewsScreen;
