import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }                                    from './app.component';
import { TabsPage }                                 from '../pages/tabs/tabs';
import { MyTreesPage }                              from '../pages/MyTrees/MyTrees';
import { CalendarPage }                             from '../pages/Calendar/Calendar';
import { SearchPage }                               from '../pages/Search/Search';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyTreesPage,
    SearchPage,
    CalendarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MyTreesPage,
    SearchPage,
    CalendarPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
