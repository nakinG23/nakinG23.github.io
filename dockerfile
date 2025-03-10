# Use official Node.js image
FROM node:18-alpine

# Install Git for gh pages
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first to leverage caching
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Create public directory and .nojekyll file during the build
RUN mkdir -p app/public && touch app/public/.nojekyll

# Expose the port your app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]