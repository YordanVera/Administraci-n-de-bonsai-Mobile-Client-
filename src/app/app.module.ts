import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }                                    from './app.component';
import { TabsPage }                                 from '../pages/tabs/tabs';
import { MyTreesPage }                              from '../pages/MyTrees/MyTrees';
import { CalendarPage }                             from '../pages/Calendar/Calendar';
import { SearchPage }                               from '../pages/Search/Search';
import { TaskPage }                                 from '../pages/Task/Task';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyTreesPage,
    SearchPage,
    CalendarPage,
    TaskPage
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
    CalendarPage,
    TaskPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
