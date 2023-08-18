import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import styled from 'styled-components/native'; // Import styled-components for React Native

import {calculateDistance} from '../utils/wifiUtils'; // Import the WiFi signal calculation function

const DashboardContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const DashboardHeader = styled.Text`
  background-color: #333;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 18px;
`;

const DashboardContent = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

const Button = styled.Button`
  margin-top: 10px;
`;

const DashboardPage: React.FC = () => {
  const [ssid1, setSSID1] = useState<string | null>(null);
  const [ssid2, setSSID2] = useState<string | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  const handleCalculateDistance = async () => {
    console.log(ssid1);
    console.log(ssid2);
    if (ssid1 && ssid2) {
      try {
        const calculatedDistance = await calculateDistance(ssid1, ssid2);
        setDistance(calculatedDistance);
      } catch (error) {
        console.error(
          'Error loading WiFi list or calculating distance:',
          error,
        );
      }
    }
  };

  return (
    <DashboardContainer>
      <DashboardHeader>WiFiApp Dashboard</DashboardHeader>
      <DashboardContent>
        <TextInput
          placeholder="Enter SSID 1"
          value={ssid1 || ''}
          onChangeText={setSSID1}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{borderWidth: 1, padding: 10, marginBottom: 10}}
        />
        <TextInput
          placeholder="Enter SSID 2"
          value={ssid2 || ''}
          onChangeText={setSSID2}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{borderWidth: 1, padding: 10}}
        />
        <Button title="Calculate Distance" onPress={handleCalculateDistance} />
        {distance !== null && (
          <Text>Distance between WiFi signals: {distance} meters</Text>
        )}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default DashboardPage;
