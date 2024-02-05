---
title: Database
description: Database linux
---

Database di gunakan untuk menyimpan data dari sebuah web. Disini kita akan fokus pada MySql (MariDB lebih tepatnya). 

Paling mudah saya mengibaratkan MySql seperti excel, akan tetapi lebih besar dan lebih fleksibel.

MS Excell merupakan antarmuka (gui) dari sheet, dan untuk menampilkan data harus menggunakan GUI yang sesuai (misal libreoffice call).

MySql lebih fleksibel dan untuk menjalankannya kita tidak membutuhkan GUI. Pilihan ketika mau melakukan olah data, kita bisa menggunakan antamuka sesuai dengan yang kita inginkan dan kuasai, web base misalnya. Atau bahkan file mysql bisa kita exsport ke dalam format xlxs,xls,csv untuk di tampilkan menggunakan MS Excell

## Install

### update upgrade
```sh
apt update && apt upgrade -y
```

### Show

```sh
sudo apt-get install apt-transport-https curl
sudo mkdir -p /etc/apt/keyrings
sudo curl -o /etc/apt/keyrings/mariadb-keyring.pgp 'https://mariadb.org/mariadb_release_signing_key.pgp'

```