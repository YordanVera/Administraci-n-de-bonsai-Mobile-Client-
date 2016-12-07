import { Component }        from '@angular/core';
import { MyTreesPage }      from '../MyTrees/MyTrees';
import { CalendarPage }     from '../Calendar/Calendar';
import { SearchPage }       from '../Search/Search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyTreesPage;
  tab2Root: any = SearchPage;
  tab3Root: any = CalendarPage;

  constructor() {

  }
}
