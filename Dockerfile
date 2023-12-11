FROM openjdk:8
EXPOSE 8081
ADD /target/OffreMicroservice-0.0.1-SNAPSHOT.jar OffreMicroservice.jar
ENTRYPOINT ["java" , "-jar" , "OffreMicroservice.jar"]
