FROM node:11-alpine

# Install prereqs
RUN apk --update add alpine-sdk git

# Install aws-cli
RUN \
    mkdir -p /aws && \
    apk -Uuv add groff less python python-dev py-pip && \
    pip install awscli && \
    apk --purge -v del py-pip && \
    rm /var/cache/apk/*

# Fix timezone
RUN apk add --update tzdata
ENV TZ=America/Denver

# Install yarn and easily get it into PATH with a symlink
ADD https://github.com/yarnpkg/yarn/releases/download/v1.15.2/yarn-1.15.2.js /usr/local/bin/yarn
RUN chmod +x /usr/local/bin/yarn