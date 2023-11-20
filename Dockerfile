# Use an official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:16-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Build the app for production.
RUN npm run build

# Run the web service on container startup using a non-root user.
USER node

# Serve the static files from the build folder.
CMD ["npx", "serve", "-s", "build"]