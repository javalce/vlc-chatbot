#!/bin/bash

set -euo pipefail

SCRIPTS_DIR=$(dirname "$0")
SRC_DIR=$(realpath "${SCRIPTS_DIR}/..")
APP_NAME="vlc-chatbot"
IMAGE_NAME="vlc-chatbot"
COMPOSE_FILE=
DEV=

help() {
  echo "Usage: deploy.sh [COMMAND]"
  echo
  echo "Options:"
  echo "  -h, --help - Show this help message and exit"
  echo "  --dev      - Use development configuration"
  echo
  echo "Commands:"
  echo "  start   - Start the application"
  echo "  stop    - Stop the application"
  echo "  restart - Restart the application"
  echo "  build   - Build the application"

}

select_compose_file() {
  if [ -n "$DEV" ]; then
    COMPOSE_FILE="$SRC_DIR/docker-compose.dev.yaml"
  else
    COMPOSE_FILE="$SRC_DIR/docker-compose.prod.yaml"
  fi
}

run_docker_compose_command() {
  if type "docker compose" &>/dev/null; then
    docker compose -f "$COMPOSE_FILE" "$@"
  else
    docker-compose -f "$COMPOSE_FILE" "$@"
  fi
}

deploy() {
  local command="$1"

  case "$command" in
  start)
    echo "Starting the application"
    run_docker_compose_command up -d --build
    ;;
  stop)
    echo "Stopping the application"
    run_docker_compose_command down
    ;;
  restart)
    echo "Restarting the application"
    run_docker_compose_command restart
    ;;
  build)
    echo "Building the application"
    run_docker_compose_command build
    ;;
  *)
    echo "Unknown command: $command"
    help
    ;;
  esac
}

OPTIONS=$(getopt -o h -l help -n "$@" -- "$@")

eval set -- "$OPTIONS"

while true; do
  case "$1" in
  -h | --help)
    help
    exit 0
    ;;
  --dev)
    DEV=1
    shift
    ;;
  --)
    shift
    break
    ;;
  *)
    echo "Internal error!"
    exit 1
    ;;
  esac
done

if [ $# -eq 0 ]; then
  echo "Command is not specified"
  echo "Use --help to see available commands"
  exit 1
fi

deploy "$1"
