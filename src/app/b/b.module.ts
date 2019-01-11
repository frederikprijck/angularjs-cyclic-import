// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';


import { moduleName as aModule } from './../a/a.module';
import { B } from './components/b.component';
import { BService } from './services/b.service';
import { CommonBService } from './services/common-b.service';

export const moduleName: any =
  angular.module('application.b', [
      aModule
  ])
  .component(B.selector, B)
  .service('bService', BService)
  .service('commonBService', CommonBService)
  .name;
