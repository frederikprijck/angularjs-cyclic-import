// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import { moduleName as sharedModule } from './../shared/shared.module';
import { A } from './components/a.component';

import { AService } from './services/a.service';

export const moduleName: any =
  angular.module('application.a', [
    sharedModule
  ])
  .component(A.selector, A)
  .service('aService', AService)
  .name;
