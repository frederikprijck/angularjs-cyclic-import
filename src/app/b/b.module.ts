// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { moduleName as sharedModule } from './../shared/shared.module';

import { B } from './components/b.component';
import { BService } from './services/b.service';

export const moduleName: any =
  angular.module('application.b', [
    sharedModule
  ])
  .component(B.selector, B)
  .service('bService', BService)
  .name;
