class ResumeController {

	constructor($scope, $mdToast, bpService) {
		var vm = this;
		this.$scope = $scope;
		this.$mdToast = $mdToast;
		this.bpService = bpService;

	}
}

ResumeController.$inject = ['$scope', '$mdToast', 'bpService'];
export default ResumeController;