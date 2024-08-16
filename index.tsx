import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

// list items
const data = [
  {id: '1', text: 'Creating a new React Native project.'},
  {id: '2', text: 'Setting up the development environment.'},
  {id: '3', text: 'Building responsive layouts with Flexbox.'},
  {id: '4', text: 'Implementing state management in React Native apps.'},
  {id: '5', text: 'Adding and configuring React Navigation.'},
  {id: '6', text: 'Integrating third-party APIs for enhanced functionality.'},
  {id: '7', text: 'Handling user authentication and authorization.'},
  {id: '8', text: 'Using custom hooks to simplify code.'},
  {id: '9', text: 'Debugging and profiling React Native apps.'},
  {id: '10', text: 'Styling components with styled-components.'},
  {id: '11', text: 'Optimizing app performance and reducing load times.'},
  {id: '12', text: 'Configuring push notifications.'},
  {id: '13', text: 'Implementing offline support and data synchronization.'},
  {id: '14', text: 'Preparing the app for release.'},
  {id: '15', text: 'Submitting the app to Stores.'},
];

// right actions
const ListItem = ({item}) => {
  const renderRightActions = () => (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={[styles.button, styles.edit]}>
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.delete]}>
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </Swipeable>
  );
};

// List view
const SwipeableList = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </GestureHandlerRootView>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginBottom: 2,
    backgroundColor: '#F1F1F1',
  },
  itemText: {
    fontSize: 15,
    fontWeight: '600',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  button: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    backgroundColor: '#ffab00',
  },
  delete: {
    backgroundColor: '#ff1744',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SwipeableList;
