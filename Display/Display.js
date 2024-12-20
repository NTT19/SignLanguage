import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function Display() {
  return (
    <View style={styles.root} testID="2424:39121">
      <View style={styles.group5} testID="2423:2543">
        <View style={styles.rectangle6} testID="2423:2544" />
      </View>
     
      <View style={styles.rectangle7} testID="2423:2546" />
      <Text style={styles.a_} testID="2423:2547">
        {`A / અ`}
      </Text>
      <View style={styles.rectangle9} testID="2423:2549" />
      <Text style={styles.continueText} testID="2423:2550">
        {`ચાલુ રાખો`}
      </Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group5: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle6: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
  rectangle7: {
    marginTop: 20,
    width: '80%',
    height: 2,
    backgroundColor: '#E0E0E0',
  },
  a_: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  rectangle9: {
    width: '80%',
    height: 2,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  continueText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginVertical: 10,
  },
});
