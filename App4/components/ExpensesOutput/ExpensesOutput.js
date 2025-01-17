import {StyleSheet, View, Text} from 'react-native';

import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

export default function ExpensesOutput({expenses, expensesPeriod, fallbackText}) {
  let content = <Text style={styles.infotext}>{fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses}/>
  }
  
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  },
  infotext: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
