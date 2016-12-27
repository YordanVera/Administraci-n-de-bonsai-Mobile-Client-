import { Component }        from '@angular/core';
import { MyTreesPage }      from '../MyTrees/MyTrees';
import { CalendarPage }     from '../Calendar/Calendar';
import { SearchPage }       from '../Search/Search';
import { TaskPage }         from '../Task/Task';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = MyTreesPage;
  tab2Root: any = SearchPage;
  tab3Root: any = CalendarPage;
  tab4Root: any = TaskPage; 

  constructor() {

  }
}
