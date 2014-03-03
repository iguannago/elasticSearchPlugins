World's Smallest Application Hosted in elasticsearch
====================================================

> Plugins can have “sites” in them, any plugin that exists under the plugins directory with a `_site` directory,
> its content will be statically served when hitting `/_plugin/[plugin_name]/` url.
> Those can be added even after the process has started.

— <http://www.elasticsearch.org/guide/reference/modules/plugins.html>


Install
-------

    mkdir -p /tmp/hello-elasticsearch
    cd /tmp
    curl -# -L -k https://gist.github.com/gists/dc733632435da2149963/download | tar xv --strip=1 -C /tmp/hello-elasticsearch
    zip -mj hello-elasticsearch.zip /tmp/hello-elasticsearch/*
    plugin -install hello-elasticsearch -url file:///tmp/hello-elasticsearch.zip
    open http://localhost:9200/_plugin/hello-elasticsearch/index.html

Done.