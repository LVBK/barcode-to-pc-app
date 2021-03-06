import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@fttx/barcode-scanner';
import { AppVersion } from '@ionic-native/app-version';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Insomnia } from '@ionic-native/insomnia';
import { LaunchReview } from '@ionic-native/launch-review';
import { NativeAudio } from '@ionic-native/native-audio';
import { Network } from '@ionic-native/network';
import { NetworkInterface } from '@ionic-native/network-interface';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Zeroconf } from '@ionic-native/zeroconf';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MarkdownModule } from 'ngx-markdown';
import { CircleTextComponent } from '../components/circle-text/circle-text';
import { KeyboardInputComponent } from '../components/keyboard-input/keyboard-input';
import { AboutPage } from '../pages/about/about';
import { ArchivedPage } from '../pages/archived/archived';
import { HelpPage } from '../pages/help/help';
import { CSVExportOptionsPage } from '../pages/scan-session/csv-export-options/csv-export-options';
import { EditScanSessionPage } from '../pages/scan-session/edit-scan-session/edit-scan-session';
import { OcrPage } from '../pages/scan-session/ocr/ocr';
import { ScanSessionPage } from '../pages/scan-session/scan-session';
import { SelectScanningModePage } from '../pages/scan-session/select-scanning-mode/select-scanning-mode';
import { ScanSessionsPage } from '../pages/scan-sessions/scan-sessions';
import { SelectServerPage } from '../pages/select-server/select-server';
import { SettingsPage } from '../pages/settings/settings';
import { WelcomePage } from '../pages/welcome/welcome';
import { EventsReporterProvider } from '../providers/events-reporter/events-reporter';
import { LastToastProvider } from '../providers/last-toast/last-toast';
import { ScanProvider } from '../providers/scan';
import { ScanSessionsStorage } from '../providers/scan-sessions-storage';
import { ServerProvider } from '../providers/server';
import { Settings } from '../providers/settings';
import { Utils } from '../providers/utils';
import { MyApp } from './app.component';



// Modules
// Ionic-native
// Pages
// import { BuyProPage } from '../pages/buy-pro/buy-pro';

// Providers
// Compontents
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ArchivedPage,
    ScanSessionsPage,
    EditScanSessionPage,
    OcrPage,
    CSVExportOptionsPage,
    SelectScanningModePage,
    WelcomePage,
    ScanSessionPage,
    SelectServerPage,
    CircleTextComponent,
    KeyboardInputComponent,
    SettingsPage,
    HelpPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicStorageModule.forRoot({
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    IonicModule.forRoot(MyApp),
    MarkdownModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ArchivedPage,
    ScanSessionsPage,
    SelectServerPage,
    EditScanSessionPage,
    OcrPage,
    CSVExportOptionsPage,
    SelectScanningModePage,
    SettingsPage,
    HelpPage,
    WelcomePage,
    ScanSessionPage,
  ],
  providers: [
    ServerProvider,
    ScanProvider,
    Utils,
    Settings,
    ScanSessionsStorage,
    FirebaseAnalytics,
    StatusBar,
    SplashScreen,
    LaunchReview,
    Device,
    SocialSharing,
    AppVersion,
    Insomnia,
    BatteryStatus,
    BarcodeScanner,
    Zeroconf,
    Camera,
    NetworkInterface,
    Network,
    NativeAudio,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LastToastProvider,
    EventsReporterProvider,
    InAppBrowser,
  ]
})
export class AppModule { }
