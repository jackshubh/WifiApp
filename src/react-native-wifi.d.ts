declare module 'react-native-wifi' {
  const WifiManager: {
    loadWifiList: () => Promise<void>;
    reScanAndLoadWifiList: () => Promise<
      Array<{BSSID: string; SSID: string; level: number}>
    >;
  };

  interface WifiInfo {
    BSSID: string;
    SSID: string;
    level: number;
  }

  export default WifiManager;
  export {WifiInfo};
}
