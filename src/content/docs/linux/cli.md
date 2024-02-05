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


### Setup

#### Update & Upgrade
```sh
apt update && apt upgrade -y
```
#### Set timezone
Server nantinya di akses oleh perangkat lain yang mungkin berlokasi pada timezone berbeda. Selain itu, secara default, server Time zone: Etc/UTC (UTC, +0000). Terdapat perbedaan +7 antara Asia/Jakarta dengan UTC. Jika kita tidak melakukan setting bagian ini, maka waktu yang tercatat pada database server akan mengikuti waktu UTC.

```sh
timedatectl
```
![timedatectl](/src/assets/linux/timedatectl.png "timedatectl")

```sh 
ls -l /etc/localtime
```

```sh
timedatectl set-timezone Asia/Jakarta
```

```sh
ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
```

```sh
timedatectl
```
![Asia Jakarta](/src/assets/linux/asia-jakarta.png "timedatectl")

Reffresi:

- [linux-command-reference-guide](https://community.sophos.com/intercept-x-endpoint/f/recommended-reads/142324/linux-command-reference-guide)
- [Linux-Bash-Commands](https://github.com/trinib/Linux-Bash-Commands/blob/main/README.md)