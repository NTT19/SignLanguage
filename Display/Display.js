import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { database, ref, onValue } from "../Firebase-connect/FirebaseConfig";

export default function DataScreen() {
  const [isStarted, setIsStarted] = useState(false);
  const [frameData, setFrameData] = useState("Đang tải dữ liệu...");
  const [apiResult, setApiResult] = useState(null);
  const [predictedLetter, setPredictedLetter] = useState(null);

  const handlePress = () => {
    setIsStarted(!isStarted);
  };


  useEffect(() => {
    const dbRef = ref(database, "/IoT"); 
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFrameData(data); 
      } else {
        setFrameData("Không có dữ liệu.");
      }
    });

    return () => unsubscribe(); 
  }, []);


  const processData = async () => {
    if (typeof frameData === "string" || !frameData) {
      alert("Không có dữ liệu hợp lệ để gửi đến API.");
      return;
    }

    const apiUrl = "https://unaware-zondra-phananhlocpal-0b40f072.koyeb.app/predict"; 


    const payload = {
      tilt_input: Array.from({length: 14}, (_, i) => frameData.tilt[`tilt_${i+1}`]),
      accel_input: [frameData.accel_x, frameData.accel_y, frameData.accel_z]
    };

     console.log('tilt_input:', payload.tilt_input);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        setApiResult(result);


        const classToLetter = (predictedClass) =>
          String.fromCharCode(65 + predictedClass); 
        setPredictedLetter(classToLetter(result.predicted_class));
      } else {
        alert("Có lỗi xảy ra khi gửi dữ liệu đến API.");
      }
    } catch (error) {
      alert("Lỗi kết nối đến API: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Xử lý dữ liệu</Text>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>

      {/* Frame Section */}
      <View style={styles.frameContainer}>
        <Text style={styles.sectionTitle}>Dữ liệu từ Firebase</Text>
        <ScrollView style={styles.frameBox}>
          <Text style={styles.frameText}>
            {typeof frameData === "string"
              ? frameData
              : JSON.stringify(frameData, null, 2)}
          </Text>
        </ScrollView>
      </View>

      {/* kết quả từ Api PAL */}
      {apiResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.sectionTitle}>Kết quả API</Text>
          <Text style={styles.resultText}>
          Dự đoán bằng số: {apiResult?.predicted_class} {"\n"}
</Text>
          <Text style={styles.resultText}>
            Dự đoán bằng chữ: {predictedLetter} {"\n"}
          </Text>
          <Text style={styles.resultText}>Xác suất dự đoán:</Text>
          <ScrollView style={styles.resultBox}>
            {apiResult.prediction[0].map((probability, index) => (
              <Text key={index} style={styles.probabilityText}>
                {String.fromCharCode(65 + index)}: {probability.toFixed(10)}
              </Text>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Action Buttons */}

      {/* <TouchableOpacity
        style={[
          styles.startButton,
          { backgroundColor: isStarted ? "#FF0000" : "#007BFF" },
        ]}
        onPress={handlePress}
      >
        <Text style={styles.startButtonText}>
          {isStarted ? "Dừng lại" : "Bắt đầu"}
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={[styles.processButton, { backgroundColor: "#28A745" }]}
        onPress={processData}
      >
        <Text style={styles.processButtonText}>Xử lý dữ liệu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  frameContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  frameBox: {
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    height: 165,
  },
  frameText: {
    fontSize: 14,
    color: "#333",
  },
  resultContainer: {
    marginVertical: 16,
  },
  resultBox: {
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    maxHeight: 160,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  probabilityText: {
    fontSize: 10,
    color: "#555",
    bottom:5,
    
  },
  startButton: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  startButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  processButton: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  processButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
