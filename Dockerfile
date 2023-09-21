FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm app:build
EXPOSE 3000:3000
CMD ["pnpm", "app:run"]
