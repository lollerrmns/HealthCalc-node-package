.PHONY: login build test console

login:
	docker-compose run -w /application healthcalc-node /bin/bash

build:
	docker-compose run -w /application healthcalc-node /bin/bash -c "npm install && npm run build"

test:
	docker-compose run -w /application healthcalc-node /bin/bash -c "npm install && npm run test"

console:
	docker-compose run -w /application/console healthcalc-node /bin/bash -c "npm install && node index.js"
