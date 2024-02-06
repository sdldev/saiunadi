---
title: PHP
description: Install and setting PHP debian
---

## INSTALL

```sh
sudo dpkg -l | grep php | tee packages.txt
```
```sh
sudo apt install apt-transport-https lsb-release ca-certificates wget -y
```

```sh
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg 
```
```sh
sudo sh -c 'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
```
```sh
sudo apt update
```
```sh

sudo apt install sudo apt install php-common php8.2 php8.2-{fpm,cli,common,opcache,readline,dom,zip,xml,curl,gd,mysql} -y

