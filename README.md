# 인프런 도커 입문

# Docker Image 만들기

### FROM - (베이스 이미지 지정)
```FROM [--patform=<platform>] <image>[:<tag>] [AS <name>]```

- FROM ubuntu:lastest
- FROM node:12
- FROM python:3

### COPY - (파일 또는 디렉토리 추가)
```COPY [--chown=<user>:<group>] <src>...<dest>```

- COPY index.html /var/www/html/
- COPY ./app /usr/src/app

### RUN - (명령어 실행)
```RUN <command>```

- RUN apt-get update
- RUN npm install

### WORKDIR - (작업 디렉토리 변경)
```WORKDIR /path/to/workdir```
- WORKDIR /app

### EXPOSE - (컨테이너에서 사용하는 포트 정보)

- EXPOSE 8000

### CMD - (컨테이너 생성시 실행할 명령어)
```CMD ["executable", "param1", "param2"]```
```CMD command param1 param2```

- CMD ["node","app.js"]
- CMD node app.js

참고사이트
- https://docs.docker.com/engine/reference/builder/



# 이미지 저장소

### 이미지 저장 명령어
- docker login
- docker push {ID}/example
- docker pull {ID}/example

![dockerpushpull](/image/dockerpushpull.PNG)
