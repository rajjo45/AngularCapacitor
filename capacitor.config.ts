import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-capacitor',
  webDir: 'dist/angular-capacitor/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
