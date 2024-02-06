---
title: Nginx
description: Install and setting nginx debian
---

# NGINX DEBIAN

Install the prerequisites:

```sh
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring
```

Import an official nginx signing key so apt could verify the packages authenticity. Fetch the key:

```sh

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

```


Verify that the downloaded file contains the proper key:

```sh

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

```


```sh
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

Set up repository pinning to prefer our packages over distribution-provided ones:
```sh

echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" \
    | sudo tee /etc/apt/preferences.d/99nginx
```

To install nginx, run the following commands:

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

