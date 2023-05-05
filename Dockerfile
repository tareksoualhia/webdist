FROM openjdk:8
EXPOSE 8087
ADD /target/AgenceDeVoyage_MicroProject-0.0.1-SNAPSHOT.jar Agence.jar
ENTRYPOINT ["java","-jar","Agence.jar"]