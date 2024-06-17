COMPOSE_FILE_DEV=docker/development/docker-compose.yaml
COMPOSE_FILE_PROD=docker/production/docker-compose.yaml

.DEFAULT_GOAL := help

.PHONY: build-dev
build-dev: ## Build the development environment
	docker compose -f $(COMPOSE_FILE_DEV) build

.PHONY: start-dev
start-dev: ## Start the development environment
	docker compose -f $(COMPOSE_FILE_DEV) up -d --build

.PHONY: stop-dev
stop-dev: ## Stop the development environment
	docker compose -f $(COMPOSE_FILE_DEV) down

.PHONY: build-prod
build-prod: ## Build the production environment
	docker compose -f $(COMPOSE_FILE_PROD) build

.PHONY: start-prod
start-prod: ## Start the production environment
	docker compose -f $(COMPOSE_FILE_PROD) up -d --build

.PHONY: stop-prod
stop-prod: ## Stop the production environment
	docker compose -f $(COMPOSE_FILE_PROD) down

.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  build-dev    Build the development environment"
	@echo "  start-dev    Start the development environment"
	@echo "  stop-dev     Stop the development environment"
	@echo "  build-prod   Build the production environment"
	@echo "  start-prod   Start the production environment"
	@echo "  stop-prod    Stop the production environment"
	@echo "  help         Show this help message"
