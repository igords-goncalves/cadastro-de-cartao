#!/bin/bash

if [ ! -d "node_modules" ]; then
  echo "Pasta node_modules não encontrada. Executando bun install..."
  bun install
fi

bun run ./app.ts