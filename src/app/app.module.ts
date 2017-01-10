import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }                                    from './app.component';
import { TabsPage }                                 from '../pages/tabs/tabs';
import { MyTreesPage }                              from '../pages/MyTrees/MyTrees';
import { CalendarPage }                             from '../pages/Calendar/Calendar';
import { SearchPage }                               from '../pages/Search/Search';
import { TaskPage }                                 from '../pages/Task/Task';
import { NewBonsaiModal }                           from '../pages/MyTrees/NewBonsaiModal/NewBonsaiModal';
import { TreeProfilePage }                          from '../pages/MyTrees/TreeProfilePage/TreeProfile';
import { TaskDetailPage }                           from '../pages/Task/TaskDetail/TaskDetail';
import { NewTask }                                  from '../pages/Task/NewTask/NewTask';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyTreesPage,
    SearchPage,
    CalendarPage,
    TaskPage,
    NewBonsaiModal,
    TreeProfilePage,
    TaskDetailPage,
    NewTask
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
    TaskPage,
    NewBonsaiModal,
    TreeProfilePage,
    TaskDetailPage,
    NewTask
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
