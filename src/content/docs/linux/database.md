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

### keyrings

```sh
sudo apt-get install apt-transport-https curl
sudo mkdir -p /etc/apt/keyrings
sudo curl -o /etc/apt/keyrings/mariadb-keyring.pgp 'https://mariadb.org/mariadb_release_signing_key.pgp'

```

### Install
```sh
apt-get update
apt-get install mariadb-server
```
### Check
```sh
mariadb -v
```

### Auto Start

```sh
systemctl start mariadb
systemctl enable mariadb
systemctl restart mariadb
```

```sh
systemctl status mariadb
```
![mariadb-status](/src/assets/linux/mariadb-status.png "mariadb-status")


## Manage

### Create User and db

```sh
sudo mariadb -u root -p
```

```sh
CREATE DATABASE dbtest;
CREATE USER dbuser@localhost IDENTIFIED BY 'password12xx';
GRANT ALL PRIVILEGES ON dbtest.* TO dbuser@localhost;
FLUSH PRIVILEGES;
quit
```

### remote other PC


```sh
nano /etc/mysql/mariadb.conf.d/50-server.cnf
```
Ganti 
``
bind-address = 127.0.0.1
``
dengan
``
bind-address = 0.0.0.0
``

![mariadb-bind](/src/assets/linux/mariadb-bind.png "mariadb-bind")


```sh
GRANT ALL ON dbtest.* to 'dbuser'@'10.10.20.%' IDENTIFIED BY 'password' WITH GRANT OPTION;
FLUSH PRIVILEGES;
quit
```

Maksudnya database dengan nama ``dbtest`` bisa diaksess oleh ``dbuser`` dari segment ip 10.10.20.0/24 menggunakan password ``password``

:::tip[TIPS?]
- Password root DB sebaiknya berbeda dengan password untuk login linux 
- user root DB tidak diberikan akses ke IP lain. Cukup localhost
- penggunaan % sebaiknya pada segment ip yg di butuhkan saja, atau bahkan hanya pada 1 ip applikasi yang tehubung pada DB
:::