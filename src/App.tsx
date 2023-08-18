import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import DashboardPage from './components/DashboardPage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>WiFiApp</Text>
      <DashboardPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default App;
