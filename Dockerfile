FROM openjdk:8
EXPOSE 8091
ADD /target/AgenceDeVoyage_MicroProject-0.0.1-SNAPSHOT.jar AgenceDeVoyage_MicroProject.jar
ENTRYPOINT ["java","-jar","AgenceDeVoyage_MicroProject.jar"]