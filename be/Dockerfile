FROM maven:latest AS build
WORKDIR /usr/src/app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src/ ./src/
RUN mvn verify

FROM adoptopenjdk/openjdk11:latest
COPY --from=build /usr/src/app/target/account-manager.jar account-manager.jar

ENV WAIT_VERSION 2.7.3
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

CMD /wait && java -jar /account-manager.jar
