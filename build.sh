#!/bin/bash
set -e

echo "Building AI API 性价比..."

# Clean and create dist
rm -rf dist
mkdir -p dist/assets

# Copy HTML
cp index.html dist/

# Copy assets
cp -r assets/ dist/assets/ 2>/dev/null || true

# Minify CSS if terser/csso available, otherwise copy as-is
if command -v npx &>/dev/null && npx --yes csso --version &>/dev/null; then
  echo "Minifying CSS..."
  npx --yes csso styles.css --output dist/styles.css
else
  echo "csso not available, copying CSS as-is (install with: npm i -g csso-cli)"
  cp styles.css dist/styles.css
fi

# Minify JS if terser available, otherwise copy as-is
if command -v npx &>/dev/null && npx --yes terser --version &>/dev/null; then
  echo "Minifying JS..."
  npx --yes terser app.js -c -m -o dist/app.js
else
  echo "terser not available, copying JS as-is (install with: npm i -g terser)"
  cp app.js dist/app.js
fi

echo "Build complete. Deploy the dist/ directory."
