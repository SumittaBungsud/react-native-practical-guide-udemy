import {StyleSheet, View, FlatList, Button} from 'react-native';
import React, {useState} from 'react';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

export default function GoalApp() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = enteredGoalText => {
    setCourseGoals([
      ...courseGoals,
      {id: Math.random().toString(), text: enteredGoalText},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add new goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalcontainer}>
        <FlatList
          data={courseGoals}
          renderItem={({item}) => (
            <GoalItem item={item} onDeleteItem={deleteGoalHandler} />
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalcontainer: {
    flex: 5,
  },
});