// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as aModule } from './a/a.module';
import { moduleName as bModule } from './b/b.module';

export const moduleName =
  angular.module('application', [
    aModule,
    bModule
  ])
  .name;
