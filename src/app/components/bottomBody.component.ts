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
  selector: 'bh-bottomBody',
  templateUrl: './bottomBody.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bottomBodyComponent {
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
      this.sd_AE40Ck0CkzmHXFc7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AE40Ck0CkzmHXFc7(bh) {
    try {
      bh = this.sd_rO24Hz79FuBjkh5U(bh);
      //appendnew_next_sd_AE40Ck0CkzmHXFc7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AE40Ck0CkzmHXFc7');
    }
  }

  //appendnew_flow_bottomBodyComponent_start

  sd_rO24Hz79FuBjkh5U(bh) {
    try {
      this.page.bottomBody = [];
      bh = this.sd_uD79ua70TYM5v5ex(bh);
      //appendnew_next_sd_rO24Hz79FuBjkh5U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rO24Hz79FuBjkh5U');
    }
  }

  sd_uD79ua70TYM5v5ex(bh) {
    try {
      const page = this.page;
      page.bottomBody = {
        belowContent:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero mollitia quae quia at totam unde dolorem quibusdam cupiditate eligendi asperiores! Ipsum ut nulla ipsa reprehenderit quae. Animi consequatur fugit officiis.',
      };
      //appendnew_next_sd_uD79ua70TYM5v5ex
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uD79ua70TYM5v5ex');
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
  //appendnew_flow_bottomBodyComponent_Catch
}
