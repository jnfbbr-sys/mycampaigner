.PHONY: help deploy build dev install clean

# Default target
help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build for production"
	@echo "  make deploy   - Deploy to Vercel"
	@echo "  make clean    - Remove node_modules and build artifacts"

# Install dependencies
install:
	npm install

# Start development server
dev:
	npm run dev

# Build for production
build:
	npm run build

# Deploy to Vercel
deploy:
	@echo "Committing changes..."
	git add .
	@read -p "Enter commit message: " msg; \
	git commit -m "$$msg" || true
	@echo "Pushing to GitHub..."
	git push origin main
	@echo "Deployment will be triggered automatically on Vercel"
	@echo "Visit https://vercel.com to monitor the deployment"

# Clean build artifacts and dependencies
clean:
	rm -rf node_modules dist
