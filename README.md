# playr

## Client

### Environment Configuration

1. Create a `.env` file in the `/client` directory
2. In the `.env` file add the following variables

```
SKIP_PREFLIGHT_CHECK=true   # Resolves some issues with eslint 7.11.0 in CRA
HEADLESS=                   # 'true' or 'false', indicates whether UI tests should be run in a browser
```

## Server

### Environment Configuration

1. Create a `.env` file in the `/server` directory
2. In the `.env` file add the following variables

```
PORT=           # port to run the express server (default: 4040)
MONGO_HOST=     # either 'localhost' [local driver] or 'mongo' [Docker]
```
