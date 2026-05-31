FROM nginx:alpine

LABEL maintainer="Your Name"
LABEL description="Nginx Web Server - Docker Task 4 - CodeAlpha"
LABEL version="1.0"

RUN apk add --no-cache wget

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

COPY website/ /usr/share/nginx/html/

RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

HEALTHCHECK --interval=30s \
            --timeout=5s \
            --start-period=10s \
            --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]