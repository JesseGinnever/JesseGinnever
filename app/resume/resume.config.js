class ResumeConfig {

    static initRoute($stateProvider, $urlRouterProvider) {
        $stateProvider.state('bp.resume', {
            url: "/resume",
            views: {
                'content@': {
                    templateUrl: require("./resume.html"),
                    controller: "ResumeController as resumeCtrl"
                }
            }
        });
        $urlRouterProvider.otherwise("/bp/home");
    }
}
ResumeConfig.initRoute.$inject = ['$stateProvider', '$urlRouterProvider'];
export default ResumeConfig.initRoute;