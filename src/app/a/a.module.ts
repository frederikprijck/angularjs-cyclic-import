// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import { moduleName as bModule } from './../b/b.module';
import { A } from './components/a.component';

import { AService } from './services/a.service';
import { CommonAService } from './services/common-a.service';

export const moduleName: any =
  angular.module('application.a', [
      bModule
  ])
  .component(A.selector, A)
  .service('aService', AService)
  .service('commonAService', CommonAService)
  .name;
