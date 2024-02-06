---
title: LEMP
description: Linux Nginx MySQL PHP (LEMP)
---

## LEMP 
Linux, Nginx, MySQL, dan PHP (LEMP) adalah sebuah konfigurasi web server yang menggunakan Linux sebagai sistem operasi, Nginx sebagai server web, MySQL sebagai sistem manajemen database, dan PHP sebagai bahasa pemrograman server-side.

### nginx

#### pre install

```sh
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring
```

```sh
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
    ```

```sh
gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

```
![pgp](/images/linux/pgp.png "pgp")

#### nginx Stable
```sh
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

### Install 

```sh
sudo apt update
sudo apt install nginx
```
```sh
nginx -v
```

### Configuration

```sh
systemctl start nginx
systemctl restart nginx
systemctl status nginx
```
Cek pada browser ``http://localhost`` atau ``http://ipaddress``

:::caution[view]
![localhost](/images/server/localhost.png)
:::



### server block

Maksudnya adalah setting konfigurasi untuk mengarahkan ke direktori tertentu, sehingga nantinya server bisa di isi banyak domain

Contoh
:::caution[view]
![server block](/images/server/server-block.png)
:::

### Konfigurasi