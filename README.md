# RFID_test
Zebra RFID FX9600 HTTP POST käyttöliittymä

#-----selvittelyä laitteen toiminnallisuudesta-----#

http://192.168.77.69/readerindex.html -> selainpohjaisen käyttöliittymän yhteys ennen rekisteröintiä

http://169.254.10.1/readerindex.html -> rekisteröinnin jälkeen toimiva yhteys

https://github.com/EMS-TU-Ilmenau/sllurp -> SLLURP ohjelmisto jos löytyy vinkkejä

https://documentation.nedap-harmony.com/docs/zebra_fxxxxx -> jotain ohjeita

https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/guide/software/fxconnect-ug-en.pdf -> jotain ohjeita

https://zebradevs.github.io/rfid-ziotc-docs/api_ref/local_rest/index.html -> jotain ohjeita


Kone: 192.168.77.10 : 8000
Zebra: 192.168.77.69 : 8000


Netcat komentoja:
eggheadstudiopro@Allar-MacBook-Pro ~ % nc -zv 172.20.10.3 8000                     
Connection to 172.20.10.3 port 8000 [tcp/irdmi] succeeded!
eggheadstudiopro@Allar-MacBook-Pro ~ % nc -zv 192.168.77.10 8000                   
Connection to 192.168.77.10 port 8000 [tcp/irdmi] succeeded!
eggheadstudiopro@Allar-MacBook-Pro ~ % nc -zv 192.168.77.69 8000                   
Connection to 192.168.77.69 port 8000 [tcp/irdmi] succeeded!


Stackoverflow josta dev ohjeisiin:
https://stackoverflow.com/questions/71425868/zebra-fx7500-rfid-reader-iot-connector-service-to-send-data-through-http-post-n
