FROM node:14

WORKDIR /app

COPY ["package.json","package-lock.json","./"]

RUN npm i

COPY . .

ENV DATABASE_URL mongodb+srv://admin:Admin123456@artcoders-ciclo-4.6i8js.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

ENV PORT 4000

EXPOSE 4000

CMD ["npm","start"]