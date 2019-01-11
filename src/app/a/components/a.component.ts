import { CommonBService } from "../../shared/services/common-b.service";

class AController {  
    constructor(
        private commonBService: CommonBService
    ) {
        'ngInject';


        console.log(commonBService);
      }
}
  
export class A implements angular.IComponentOptions {
    static selector = 'aComponent';

    static template = 'This is Component A';
    static controller = AController;
}
  