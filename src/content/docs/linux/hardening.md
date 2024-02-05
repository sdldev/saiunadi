---
title: Hardening debian
description: Hardening debian server
---
Dari katanya, terlihat hardening bertujuan untuk meningkatkan keamanan sistem operasi yang akan di gunakan untuk server

## Install system audit
```sh
apt install git
git clone https://github.com/CISOfy/lynis
```

```sh
cd lynis 
./lynis audit system
```

![lynis](/images/linux/lynis.png "lynis")
Dari gambar diatas terlihat nilai index hanya 63. Semakin tinggi nilai index, akan semakin baik

pada lynis diberikan rekomondasi2 manasaja yang bisa kita kulik.

### Hardening SSH
```sh
wget https://raw.githubusercontent.com/sdldev/server/main/ssh/hardening-ssh && 
sudo mv hardening-ssh /etc/ssh/sshd_config && 
sudo sshd -T && 
sudo systemctl restart sshd && 
sudo reboot
```

setelah dilakukan hardenig pada SSH terlihat skor index bertambah
![lynis-ssh](/images/linux/lynis-ssh.png "lynis-ssh")

Selanjutnya lakukan hardening sesuai dengan rekomondasi yang ada
