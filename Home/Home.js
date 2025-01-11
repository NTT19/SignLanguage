import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
export default function HomeScreen({ navigation }) {

    const handleTraining = () => {
        console.log("display");
        navigation.navigate('Display'); 
      };
    
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trang chủ</Text>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>

      {/* Device Status */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trạng thái thiết bị</Text>
        <View style={styles.statusBox}></View>
      </View>

      {/* Recent Activities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hoạt động gần đây</Text>
        <View style={styles.recentActivity}>
          <View style={styles.circle}></View>
          <Text style={styles.activityText}>Cử chỉ #1</Text>
        </View>
        <View style={styles.recentActivity}>
          <View style={styles.circle}></View>
          <Text style={styles.activityText}>Cử chỉ #2</Text>
        </View>
        <View style={styles.recentActivity}>
          <View style={styles.circle}></View>
          <Text style={styles.activityText}>Cử chỉ #3</Text>
        </View>
      </View>

      {/* Navigation */}
      <View style={styles.navigation}>
        <TouchableOpacity style={[styles.navButton, { backgroundColor: '#1e90ff' }]} onPress={handleTraining}>
            <Text style={styles.navText}>Huấn luyện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, { backgroundColor: '#6ab04c' }]}>
          <Text style={styles.navText}>Thống kê</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, { backgroundColor: '#ffa502' }]}>
        <Text style={styles.navText}>Cài đặt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusBox: {
    height: 100,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
  recentActivity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    marginRight: 10,
  },
  activityText: {
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
  },
  navButton: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});