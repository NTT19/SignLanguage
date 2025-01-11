import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { database, ref, onValue } from "../Firebase-connect/FirebaseConfig";

export default function DataScreen() {
  const [isStarted, setIsStarted] = useState(false);
  const [frameData, setFrameData] = useState(null);
  const [apiResult, setApiResult] = useState(null);
  const [predictedLetter, setPredictedLetter] = useState(null);

  const handlePress = () => {
    setIsStarted(!isStarted);
  };

  useEffect(() => {
    const dbRef = ref(database, "/IoT");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object") {
        setFrameData(data);
      } else {
        setFrameData(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  const processData = async () => {
    if (!frameData || typeof frameData !== "object" || !frameData.tilt) {
      alert("Dữ liệu từ Firebase không hợp lệ hoặc bị thiếu.");
      return;
    }

    const tiltData = Array.from({ length: 11 }, (_, i) =>
      frameData.tilt && frameData.tilt[`tilt_${i + 1}`] !== undefined
        ? frameData.tilt[`tilt_${i + 1}`]
        : 0
    );

    const accelData = [
      frameData.accel1_x || 0.0,
      frameData.accel1_y || 0.0,
      frameData.accel1_z || 0.0,
      frameData.accel2_x || 0.0,
      frameData.accel2_y || 0.0,
      frameData.accel2_z || 0.0,
      frameData.accel3_x || 0.0,
      frameData.accel3_y || 0.0,
      frameData.accel3_z || 0.0,
    ];

    const payload = { tilt: tiltData, accel: accelData };
    const apiUrl = "https://personal-noelle-phananhlocpal-3ae312a3.koyeb.app/predict";

    console.log("Payload gửi đến API:", payload);

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
          typeof predictedClass === "number"
            ? String.fromCharCode(65 + predictedClass)
            : "N/A";

        setPredictedLetter(classToLetter(result.predicted_label));
      } else {
        const errorResponse = await response.text();
        console.error("API Error Response:", errorResponse);
        alert(`Có lỗi xảy ra khi gửi dữ liệu đến API. HTTP Status: ${response.status}`);
      }
    } catch (error) {
      alert("Lỗi kết nối đến API: " + error.message);
    }
  };


  const getImageForLetter = (letter) => {
    const images = {
      A: require("../assets/Image/A.png"),
      B: require("../assets/Image/B.png"),
      C: require("../assets/Image/C.png"),
      D: require("../assets/Image/D.png"),
      E: require("../assets/Image/E.png"),
      F: require("../assets/Image/F.png"),
      G: require("../assets/Image/J.png"),
      H: require("../assets/Image/H.png"),
      I: require("../assets/Image/I.png"),
      J: require("../assets/Image/J.png"),
      K: require("../assets/Image/K.png"),
      L: require("../assets/Image/L.png"),
      M: require("../assets/Image/M.png"),
      N: require("../assets/Image/N.png"),
      O: require("../assets/Image/O.png"),
      P: require("../assets/Image/P.png"),
      Q: require("../assets/Image/Q.png"),
      O: require("../assets/Image/O.png"),
      S: require("../assets/Image/S.png"),
      T: require("../assets/Image/T.png"),
      U: require("../assets/Image/U.png"),
      V: require("../assets/Image/V.png"),
      W: require("../assets/Image/W.png"),
      X: require("../assets/Image/X.png"),
      Y: require("../assets/Image/Y.png"),
      Z: require("../assets/Image/Z.png"),

    
    };
    return images[letter] || null;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Xử lý dữ liệu</Text>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>

      {/* Frame Section */}
      {/* <View style={styles.frameContainer}>
        <Text style={styles.sectionTitle}>Dữ liệu từ Firebase</Text>
        <ScrollView style={styles.frameBox}>
          <Text style={styles.frameText}>
            {frameData
              ? typeof frameData === "string"
                ? frameData
                : JSON.stringify(frameData, null, 2)
              : "Không có dữ liệu hoặc dữ liệu không hợp lệ."}
          </Text>
        </ScrollView>
      </View> */}

      {/* API Result Section */}
      {apiResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.sectionTitle}>KẾT QUẢ DỰ ĐOÁN</Text>
          <Text style={styles.resultText}>
            Dự đoán bằng số:
            <Text style={styles.predictedLabelText}> {apiResult?.predicted_label} </Text>
          
          </Text>
          <Text style={styles.resultText}>
            Dự đoán bằng chữ: 
            <Text style={styles.predictedLetter}> {predictedLetter} </Text>
      
          </Text>
        
          {predictedLetter && (
            <View style={styles.imageContainer}>
              <Text style={styles.sectionTitle}>Hình ảnh minh họa</Text>
              <Image
                source={getImageForLetter(predictedLetter)}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      )}

      {/* Action Buttons */}
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
    fontSize: 18, 
    fontWeight: "bold",
  },
  frameContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20, 
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 10,
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
    fontSize: 16, 
    color: "#333",

  },
  resultContainer: {
    marginVertical: 16,
  },
  resultText: {
    top: 12,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  probabilityText: {
    fontSize: 16, 
    color: "#555",
  },
  predictedLabelText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF0000",
  },
  predictedLetter: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF0000", 
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 150,
  },
  processButton: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  processButtonText: {
    fontSize: 20, 
    color: "#FFF",
    fontWeight: "bold",
  },
});