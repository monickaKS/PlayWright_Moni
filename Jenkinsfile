pipeline {
    agent {
        node {
            label 'nodejs'
        }
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10', daysToKeepStr: '30'))
        disableConcurrentBuilds()
    }

    environment {
        NODE_ENV = 'test'
        CI = 'true'
        BASE_URL = credentials('base-url-test')
    }

    parameters {
        choice(name: 'BROWSER', choices: ['chromium', 'firefox', 'webkit', 'all'], description: 'Select browser to test')
        booleanParam(name: 'DEBUG_MODE', defaultValue: false, description: 'Enable debug mode with traces')
    }

    stages {
        stage('Checkout') {
            steps {
                echo '========== Checking out code =========='
                checkout scm
                sh 'git log --oneline -1'
            }
        }

        stage('Validate') {
            steps {
                echo '========== Validating Environment =========='
                sh '''
                    node --version
                    npm --version
                    npx playwright --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '========== Installing Dependencies =========='
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Lint Tests') {
            steps {
                echo '========== Linting Test Files =========='
                sh '''
                    if [ -f .eslintrc.json ]; then
                        npm run lint || echo "ESLint warnings found"
                    else
                        echo "No ESLint config found, skipping..."
                    fi
                '''
            }
        }

        stage('Run Tests') {
            steps {
                echo '========== Running Playwright Tests =========='
                sh '''
                    case "${BROWSER}" in
                        chromium)
                            npx playwright test --project=chromium --reporter=html
                            ;;
                        firefox)
                            npx playwright test --project=firefox --reporter=html
                            ;;
                        webkit)
                            npx playwright test --project=webkit --reporter=html
                            ;;
                        all)
                            npx playwright test --reporter=html
                            ;;
                    esac
                '''
            }
        }

        stage('Generate Reports') {
            when {
                always()
            }
            steps {
                echo '========== Generating Test Reports =========='
                sh '''
                    if [ -d "playwright-report" ]; then
                        echo "Test report generated successfully"
                        ls -la playwright-report/
                    fi
                    if [ -d "test-results" ]; then
                        echo "Test results summary:"
                        find test-results -name "*.md" -exec echo {} \\;
                    fi
                '''
            }
        }
    }

    post {
        always {
            echo '========== Test Cleanup =========='
            junit testResults: 'test-results/**/*.xml', allowEmptyResults: true
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report',
                keepAll: true,
                alwaysLinkToLastBuild: true
            ])
            archiveArtifacts artifacts: 'test-results/**/*,playwright-report/**/*', 
                              allowEmptyArchive: true
            cleanWs()
        }

        success {
            echo '✅ Pipeline completed successfully!'
            // Uncomment for Slack notifications
            // slackSend(channel: '#automation-tests', color: 'good', message: "✅ Test run passed - ${env.BUILD_URL}")
        }

        failure {
            echo '❌ Pipeline failed. Check reports for details.'
            // Uncomment for Slack notifications
            // slackSend(channel: '#automation-tests', color: 'danger', message: "❌ Test run failed - ${env.BUILD_URL}")
        }

        unstable {
            echo '⚠️ Some tests failed but pipeline continued.'
        }
    }
}
