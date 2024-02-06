---
title: Linux CLI
description: Comand Line linux
---
Saya akan fokus CLI spesifik untuk SYS ADMIN, dan cli di bawah langsung di gunakan ketika bangun sebuah web server. Untuk lebih spesifik, nanti akan di pisah sesuai kegunaan masing-server

## Dasar
***superuser do*** memiliki hak akses/keamanan penuh
```
sudo
```
### REMOTE

### cek koneksi
cek menuju IP spesifik

Note: ketika installasi paket tertentu, maka di butuhkan akses online.
```
ping xxx.xx.xxx.x
```

#### Remote via SSH
```
ssh root@xxx.xxx.x.xx
```
xxx.xxx.x.xx merupakan ip tujuan


## Setup


### Update & upgrade

```
apt update && apt upgrade -y
```

### Install Basic

``` js
sudo apt install git curl wget nano unzip sudo -y
```

## Create User
```sh
adduser user_name
usermod -aG sudo user_name
usermod -aG www-data user_name
su - user_name
```


Reffresi:

- [linux-command-reference-guide](https://community.sophos.com/intercept-x-endpoint/f/recommended-reads/142324/linux-command-reference-guide)
- [Linux-Bash-Commands](https://github.com/trinib/Linux-Bash-Commands/blob/main/README.md)