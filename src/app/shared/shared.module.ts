// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import { CommonAService } from './services/common-a.service';
import { CommonBService } from './services/common-b.service';

export const moduleName: any =
  angular.module('application.shared', [
  ])
  .service('commonAService', CommonAService)
  .service('commonBService', CommonBService)
  .name;
