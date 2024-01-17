pipeline {
  agent any
tools {
        nodejs 'nodejs'
    }
    environment {
        CI = 'false'
    }
  stages {
    stage('Clone') {
      steps {
        git branch: 'master', credentialsId: 'ishan-dml-token', url: 'https://github.com/digimantra/klout-club-frontend.git'
      }
    }


    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        withCredentials([
          usernamePassword(credentialsId: 'foobar-server', usernameVariable: 'SSH_USERNAME', passwordVariable: 'SSH_PASSWORD')
        ]) {
          sh '''
            sshpass -p "$SSH_PASSWORD" scp -r build/* $SSH_USERNAME@14.97.60.130:/var/www/html/klout-frontend/
          '''
        }
      }
    }
  }
 
}
