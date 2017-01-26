node {
	def workspacepath = "${env.WORKSPACE}\\"
	stage ('Checkout'){
		checkout scm
	}
	stage('Copy stylesheets') {
			dir("${workspacepath}dist") {
			bat 'COPY *.css c:\\Jenkins\\userContent'
		}
	}
}