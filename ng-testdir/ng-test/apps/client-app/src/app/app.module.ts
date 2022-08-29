import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
 declarations: [AppComponent],
 imports: [
   BrowserModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
   provideFirestore(() => getFirestore()),
   AngularFirestoreModule.enablePersistence({synchronizeTabs: true}),
   RouterModule.forRoot([{
     path: '',
     loadChildren: () => import('./remote-entry/entry.module').then(m => m.RemoteEntryModule)
   }], { initialNavigation: 'enabledBlocking' }),
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}