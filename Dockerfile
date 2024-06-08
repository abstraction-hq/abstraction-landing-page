# Use the official Node.js 18.19.1 image as the base image
FROM node:18.19.1

WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install yarn and project dependencies
RUN yarn install

# Copy the rest of the project files to the working directory
COPY . .
# RUN yarn build

# USER nextjs

# Start the app on port 3000
EXPOSE 3000

# Start the app
CMD HOSTNAME="0.0.0.0" yarn run dev