FROM node:14-alpine

ENV WORKDIR=/qboard
ENV USER=qboard
ENV GROUP=$USER
ENV PORT=3000

WORKDIR $WORKDIR

RUN addgroup -S $GROUP \
 && adduser -S $USER -G $GROUP -D \
 && chown $USER:$GROUP $WORKDIR
USER $USER

COPY ./ .

RUN npm install
RUN npm run build

ENTRYPOINT ["npm"]
CMD ["start"]
EXPOSE $PORT
