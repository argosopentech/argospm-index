# Download all packages into current directory

import json
import subprocess

DOWNLOAD_DIR = "packages_download"

with open("index.json") as index_file:
    index = json.load(index_file)
    for metadata in index:
        links = metadata["links"]
        link = links[0]
        print(link)
        subprocess.run(["wget", link, "-P", DOWNLOAD_DIR])



