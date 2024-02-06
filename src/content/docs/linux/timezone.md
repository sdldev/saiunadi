---
title: Setting Time Zone pada linux
---

#### Set timezone
Server nantinya di akses oleh perangkat lain yang mungkin berlokasi pada timezone berbeda. Selain itu, secara default, server Time zone: Etc/UTC (UTC, +0000). Terdapat perbedaan +7 antara Asia/Jakarta dengan UTC. Jika kita tidak melakukan setting bagian ini, maka waktu yang tercatat pada database server akan mengikuti waktu UTC.

```sh
timedatectl
```
:::caution[view]
![timedatectl](/images/linux/timedatectl.png "timedatectl")
:::

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
:::caution[view]
![Asia Jakarta](/images/linux/asia-jakarta.png "timedatectl")
:::
