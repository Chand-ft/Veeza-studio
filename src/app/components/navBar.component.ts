/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-navBar',
  templateUrl: './navBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class navBarComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_Zp04Q5ZH8UhKrLKn(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Zp04Q5ZH8UhKrLKn(bh) {
    try {
      bh = this.sd_BLmXKWWyOIMaEM2y(bh);
      //appendnew_next_sd_Zp04Q5ZH8UhKrLKn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zp04Q5ZH8UhKrLKn');
    }
  }

  //appendnew_flow_navBarComponent_start

  sd_BLmXKWWyOIMaEM2y(bh) {
    try {
      this.page.section1 = [];
      bh = this.sd_2GBPycEb4eRXN2y1(bh);
      //appendnew_next_sd_BLmXKWWyOIMaEM2y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BLmXKWWyOIMaEM2y');
    }
  }

  sd_2GBPycEb4eRXN2y1(bh) {
    try {
      const page = this.page;
      page.section1 = {
        logo: 'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
        navItems: ['About', 'Services', 'Project', 'Contact'],
        backgroundImage:
          'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
        heading: 'loremwehfuewuf',
        content: 'hfhwhfkwe hfewfewkfk',
        belowContent: 'ufehhwefk efiejwkf fjewijf',
      };
      //appendnew_next_sd_2GBPycEb4eRXN2y1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2GBPycEb4eRXN2y1');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_navBarComponent_Catch
}
