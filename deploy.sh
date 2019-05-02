#!/bin/bash

#./deploy.sh

npm install
npm run build

if [[ $? -eq 0 ]]; then

    aws s3 sync build/. s3://"${PORTAL_ENDPOINT}".infopriceti.com.br --delete --profile "${AWS_PROFILE}"

else
    echo "build FAILED"
    exit 1
fi
