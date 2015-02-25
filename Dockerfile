FROM maxexcloo/data

RUN mkdir /data/http

ADD ./assets /data/http/assets
ADD ./index.html /data/http/index.html
