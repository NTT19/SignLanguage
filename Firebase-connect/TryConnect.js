import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { database } from '/firebaseConfig';

export default function RealtimeDataScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ Firebase
    const reference = database.ref('/path-to-your-data'); // Thay '/path-to-your-data' bằng đường dẫn trong Firebase
    const onValueChange = reference.on('value', (snapshot) => {
      const value = snapshot.val();
      setData(value); // Lưu dữ liệu vào state
    });

    // Hủy lắng nghe khi component bị unmount
    return () => reference.off('value', onValueChange);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dữ liệu Realtime</Text>
      {data ? (
        <Text style={styles.data}>{JSON.stringify(data, null, 2)}</Text>
      ) : (
        <Text>Đang tải dữ liệu...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  data: {
    fontSize: 16,
    color: '#333',
  },
});