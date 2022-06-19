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
  selector: 'bh-page_4',
  templateUrl: './page_4.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class page_4Component {
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
      this.sd_P3V4HLB7Zr7m1jv6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_P3V4HLB7Zr7m1jv6(bh) {
    try {
      bh = this.sd_5R6GQyzR9gCDf5Nz(bh);
      //appendnew_next_sd_P3V4HLB7Zr7m1jv6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P3V4HLB7Zr7m1jv6');
    }
  }

  //appendnew_flow_page_4Component_start

  sd_5R6GQyzR9gCDf5Nz(bh) {
    try {
      this.page.page4Items = [];
      bh = this.sd_q8DCZu2zSByXwV7b(bh);
      //appendnew_next_sd_5R6GQyzR9gCDf5Nz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5R6GQyzR9gCDf5Nz');
    }
  }

  sd_q8DCZu2zSByXwV7b(bh) {
    try {
      const page = this.page;
      page.page4Items = {
        heading: 'Trusted by over 150+ organizations in more than 50 countries',
        paragraph: 'sdfghjbknl',
        icon: 'arrow-up',
        logo: 'url',
        list1: ['one', 'one', 'one'],
        list2: ['one', 'one', 'one'],
        footer: ['one', 'one', 'one'],
      };
      //appendnew_next_sd_q8DCZu2zSByXwV7b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q8DCZu2zSByXwV7b');
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
  //appendnew_flow_page_4Component_Catch
}
