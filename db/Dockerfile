FROM mongo:4.2.8

RUN -d -v /data/db:/data/db --name authflowdb mongo:4.2.8

RUN exec -it authflowdb bash

RUN mongo

