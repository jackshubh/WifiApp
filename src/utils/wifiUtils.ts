import WifiManager from 'react-native-wifi-reborn';

export const calculateDistance = async (
  ssid1: string,
  ssid2: string,
): Promise<number> => {
  try {
    const temp = await WifiManager.connectToSSID(ssid1);
    console.log(temp);
    const wifiSignal1RSSIValue = await WifiManager.getCurrentSignalStrength();
    await WifiManager.connectToSSID(ssid2);
    const wifiSignal2RSSIValue = await WifiManager.getCurrentSignalStrength();
    console.log(wifiSignal1RSSIValue);
    console.log(wifiSignal2RSSIValue);

    const distance = calculateDistanceBasedOnSignalStrength(
      await wifiSignal1RSSIValue,
      await wifiSignal2RSSIValue,
    );

    return distance;
  } catch (error) {
    console.error('Error calculating distance:', error);
    throw error;
  }
};

const calculateDistanceBasedOnSignalStrength = (
  _signal1: number,
  _signal2: number,
): number => {
  const k = 10; // Some constant factor

  return k;
};
