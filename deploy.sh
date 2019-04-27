#!/bin/bash

#./deploy.sh

if [[ $? -eq 0 ]]; then

    aws s3 sync . s3://"${PORTAL_ENDPOINT}".infopriceti.com.br --delete --profile "${AWS_PROFILE}"

else
    echo "build FAILED"
    exit 1
fi
