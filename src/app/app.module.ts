import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { QuestaoMultiplaEscolhaPage } from '../pages/questao-multipla-escolha/questao-multipla-escolha';
import { QuestaoVerdadeiroFalsoPage } from '../pages/questao-verdadeiro-falso/questao-verdadeiro-falso';
import { QuestaoParPage } from '../pages/questao-par/questao-par';
import { SucessoPage } from '../pages/sucesso/sucesso';
import { ErroPage } from '../pages/erro/erro';
import { FeedbackPage } from '../pages/feedback/feedback';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        QuestaoMultiplaEscolhaPage,
        QuestaoVerdadeiroFalsoPage,
        QuestaoParPage,
        SucessoPage,
        ErroPage,
        FeedbackPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        QuestaoMultiplaEscolhaPage,
        QuestaoVerdadeiroFalsoPage,
        QuestaoParPage,
        SucessoPage,
        ErroPage,
        FeedbackPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
