import WifiManager from 'react-native-wifi-reborn';

export const calculateDistance = async (
  ssid1: string,
  ssid2: string,
): Promise<number> => {
  try {
    await WifiManager.connectToSSID(ssid1);
    const wifiSignal1RSSIValue = await WifiManager.getCurrentSignalStrength();

    await WifiManager.connectToSSID(ssid2);
    const wifiSignal2RSSIValue = await WifiManager.getCurrentSignalStrength();

    const frequency = await WifiManager.getFrequency();

    const distance = calculateDistanceBasedOnSignalStrength(
      wifiSignal1RSSIValue,
      wifiSignal2RSSIValue,
      frequency,
    );

    return distance;
  } catch (error) {
    console.error('Error calculating distance:', error);
    throw error;
  }
};

const calculateDistanceBasedOnSignalStrength = (
  signal1: number,
  signal2: number,
  frequency: number,
): number => {
  const exp =
    (27.55 - 20 * Math.log10(frequency) + Math.abs(signal1 - signal2)) / 20.0;
  return Math.pow(10.0, exp);
};
