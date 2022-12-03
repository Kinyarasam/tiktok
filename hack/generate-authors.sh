#!/usr/bin/env bash
# Bash script to generate a list of authors having contributed to the repository

set -e

cd "$(dirname "$(readlink -f $BASH_SOURCE)")/.."

# see also .mailmao for how wmail addresses and names are deduplicated

{
	cat <<- 'EOH'
		# This file lists all individuals having contributed content to this repository
		# For how it is generated, see `hack/generate-authors.sh`.
	EOH
	echo
	git log --format='%aN <%aE>' | LC_ALL=C.UTF-8 sort -uf
} > AUTHORS
