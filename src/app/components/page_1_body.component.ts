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
  selector: 'bh-page_1_body',
  templateUrl: './page_1_body.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class page_1_bodyComponent {
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
      this.sd_O7gy0dCsW5bEpM2E(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_O7gy0dCsW5bEpM2E(bh) {
    try {
      bh = this.sd_JqfuZ762on36v6me(bh);
      //appendnew_next_sd_O7gy0dCsW5bEpM2E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O7gy0dCsW5bEpM2E');
    }
  }

  //appendnew_flow_page_1_bodyComponent_start

  sd_JqfuZ762on36v6me(bh) {
    try {
      //appendnew_next_sd_JqfuZ762on36v6me
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JqfuZ762on36v6me');
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
  //appendnew_flow_page_1_bodyComponent_Catch
}
