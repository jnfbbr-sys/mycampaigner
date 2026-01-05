.PHONY: help deploy deploy-prod build dev install clean vercel-setup

# Default target
help:
	@echo "Available commands:"
	@echo "  make install      - Install dependencies"
	@echo "  make dev          - Start development server"
	@echo "  make build        - Build for production"
	@echo "  make vercel-setup - Install Vercel CLI and link project"
	@echo "  make deploy       - Deploy to Vercel (production)"
	@echo "  make clean        - Remove node_modules and build artifacts"

# Install dependencies
install:
	npm install

# Start development server
dev:
	npm run dev

# Build for production
build:
	npm run build

# Setup Vercel CLI
vercel-setup:
	@echo "Installing Vercel CLI globally..."
	npm install -g vercel
	@echo "Linking project to Vercel..."
	vercel link
	@echo "Setup complete! Now you can use 'make deploy'"

# Deploy to Vercel production
deploy:
	@echo "Building project..."
	npm run build
	@echo "Deploying to Vercel..."
	vercel --prod
	@echo "Deployment complete!"

# Deploy and commit to git
deploy-prod:
	@echo "Committing changes..."
	git add .
	@read -p "Enter commit message: " msg; \
	git commit -m "$$msg" || true
	@echo "Pushing to GitHub..."
	git push origin main
	@echo "Deploying to Vercel..."
	vercel --prod
	@echo "Deployment complete!"

# Clean build artifacts and dependencies
clean:
	rm -rf node_modules dist
