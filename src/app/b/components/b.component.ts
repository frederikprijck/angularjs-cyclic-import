import { CommonAService } from "../../shared/services/common-a.service";

class BController { 
    constructor(
        private commonAService: CommonAService
    ) {
        'ngInject';

        console.log(commonAService);
      } 
}
  
export class B implements angular.IComponentOptions {
    static selector = 'bComponent';

    static template = 'This is Component B';
    static controller = BController;
}
  