FROM openjdk:8
EXPOSE 8086
ADD /target/Transport-0.0.1-SNAPSHOT.jar Transport.jar
ENTRYPOINT ["java","-jar","Transport.jar"]