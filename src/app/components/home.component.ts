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
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_7MVEth8A6iFURHUy(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7MVEth8A6iFURHUy(bh) {
    try {
      bh = this.sd_vV8AyqgGnu12QRXl(bh);
      //appendnew_next_sd_7MVEth8A6iFURHUy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7MVEth8A6iFURHUy');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_vV8AyqgGnu12QRXl(bh) {
    try {
      this.page.allData = [];
      bh = this.sd_qAq6nRq3pUbUv4ze(bh);
      //appendnew_next_sd_vV8AyqgGnu12QRXl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vV8AyqgGnu12QRXl');
    }
  }

  sd_qAq6nRq3pUbUv4ze(bh) {
    try {
      const page = this.page;
      page.allData = {
        section1: {
          logo: 'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
          navItems: ['About', 'Services', 'Project', 'Contact'],
          backgroundImage:
            'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
          heading: 'loremwehfuewuf',
          content: 'hfhwhfkwe hfewfewkfk',
          belowContent: 'ufehhwefk efiejwkf fjewijf',
        },
        section2: {
          heading: 'Explore Our Project',
          paragraph1: 'loremwehfuewuf jefjfek ekjjkewjk',
          housesImages: [
            {
              image:
                'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
              title: ' Fjhjjkkj DauelHeavan',
              paragraph: 'fjjkwe fiujwef ufwhfjke fewhufj',
              date: ' January 18-2022',
            },
            {
              image:
                'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
              title: ' Fjhjjkkj DauelHeavan',
              paragraph: 'fjjkwe fiujwef ufwhfjke fewhufj',
              date: ' January 18-2022',
            },
            {
              image:
                'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
              title: ' Fjhjjkkj DauelHeavan',
              paragraph: 'fjjkwe fiujwef ufwhfjke fewhufj',
              date: ' January 18-2022',
            },
            {
              image:
                'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
              title: ' Fjhjjkkj DauelHeavan',
              paragraph: 'fjjkwe fiujwef ufwhfjke fewhufj',
              date: ' January 18-2022',
            },
          ],
        },

        section3: {
          image:
            'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
          heading: 'Enhance your interior',
          paragraph: 'fjjkwe fiujwef ufwhfjke fewhufj',
          largeImage:
            'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
        },
        section4: {
          heading: 'qwgehbkjnl',
          paragraph: 'yuhkjnlrefdtuejhkdateuyriut',
          InfoInsideImg: {
            heading: ['kitchen', 'officeRoam,bedRoom'],
            location: ['kitchen', 'officeRoam,bedRoom'],
            interest: ['kitchen', 'officeRoam,bedRoom'],
            backgroundImage: [
              'image.png',
              'image.png',
              'image.png',
              'image.png',
              'image.png',
              'image.png',
            ],
            amount: ['>$5.000', '>$1.000', '>$12.000'],
          },
          section5: {
            heading: 'qwgehbkjnl',
            paragraph: 'sdfghjbknl',
            icon: 'arrow-up',
            logo: 'url',
            list1: ['one', 'one', 'one'],
            list2: ['one', 'one', 'one'],
            footer: ['one', 'one', 'one'],
          },
        },
      };
      this.sd_nRwfAIcAR5FfPfYm(bh);
      //appendnew_next_sd_qAq6nRq3pUbUv4ze
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qAq6nRq3pUbUv4ze');
    }
  }

  sd_nRwfAIcAR5FfPfYm(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.allData);
      //appendnew_next_sd_nRwfAIcAR5FfPfYm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nRwfAIcAR5FfPfYm');
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
  //appendnew_flow_homeComponent_Catch
}
