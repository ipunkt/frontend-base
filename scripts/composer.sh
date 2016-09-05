#!/usr/bin/env bash
IMAGE="ipunktbs/php-composer:7.0.9-1.2.0"
USERID=$(id -u)
GROUPID=$(id -g)
DIRECTORY="/user/src/admin-local-php7"
COMPOSERDIR=$(readlink -f ~/.composer)

if tty 2>&1 > /dev/null ; then
        INTERACTIVE="-it"
else
        INTERACTIVE=""
        echo "No terminal detected, running in non-interactive mode"
fi

case $1 in
	*)
		docker run $INTERACTIVE --rm --hostname php7 -e "LOCAL_USER_ID=$USERID" \
			-v "$COMPOSERDIR:/.composer" \
			-v $(pwd):"$DIRECTORY" \
			-w "$DIRECTORY" \
			"$IMAGE" composer $*
		;;
esac
