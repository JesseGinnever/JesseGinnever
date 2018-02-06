import ResumeConfig from './resume.config';
import ResumeController from './resume.controller';

let resumeModule = angular.module('bpui.resume', []);

resumeModule.config(ResumeConfig);
resumeModule.controller('ResumeController', ResumeController);

export default resumeModule = resumeModule.name