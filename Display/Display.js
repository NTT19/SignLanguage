import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { database, ref, onValue } from "../Firebase-connect/FirebaseConfig";

export default function DataScreen() {
  const [isStarted, setIsStarted] = useState(false);
  const [frameData, setFrameData] = useState("Đang tải dữ liệu...");

  const handlePress = () => {
    setIsStarted(!isStarted);
  };

  // Lấy dữ liệu từ Firebase
  useEffect(() => {
    const dbRef = ref(database, "/name");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFrameData(JSON.stringify(data, null, 2)); // Hiển thị toàn bộ dữ liệu dạng JSON
      } else {
        setFrameData("Không có dữ liệu.");
      }
    });

    return () => unsubscribe(); // Cleanup khi component unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dữ liệu</Text>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>

      {/* Frame Section */}
      <View style={styles.frameContainer}>
        <Text style={styles.sectionTitle}>Khung hình</Text>
        <View style={styles.frameBox}>
          <Text style={styles.frameText}>{frameData}</Text>
        </View>
      </View>

      {/* Data Fields */}
      <View style={styles.dataContainer}>
        <View style={styles.dataBox}>
          <Text style={styles.dataTitle}>Góc nghiêng</Text>
          <TextInput style={styles.dataValue} value="0.00" editable={false} />
        </View>
        <View style={styles.dataBox}>
          <Text style={styles.dataTitle}>Gia tốc</Text>
          <TextInput style={styles.dataValue} value="0.00" editable={false} />
        </View>
        <View style={styles.dataBox}>
          <Text style={styles.dataTitle}>Vận tốc</Text>
          <TextInput style={styles.dataValue} value="0.00" editable={false} />
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity
        style={[
          styles.startButton,
          { backgroundColor: isStarted ? "#FF0000" : "#007BFF" },
        ]}
        onPress={handlePress}
      >
        <Text style={styles.startButtonText}>{isStarted ? "Kết thúc ngay" : "Bắt đầu"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  frameContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  frameBox: {
    height: 150,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  frameText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  dataContainer: {
    marginBottom: 20,
  },
  dataBox: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
  },
  dataTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dataValue: {
    fontSize: 16,
    color: "#333",
  },
  startButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
