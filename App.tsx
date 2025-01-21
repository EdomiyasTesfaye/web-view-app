import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView
        source={{ uri: 'https://www.giyaamarket.com/' }} // Replace with your desired URL
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;