# Render Process Testing

Sample project to test browser rendering process

## Usage

install dependecies and start the server

```bash
npm install && npm start
```

access the html entry file format:

```
http://localhost:8000/file-name.html
```

for example:

```
http://localhost:8000/load-image.html
```

access the other file format:

```
http://localhost:8000/dir/file-name.ext
http://localhost:8000/dir/file-name?delay=time.ext
```

if we add delay parameter, server will send file back after delay time

for example:

```
http://localhost:8000/css/div-blue.css
http://localhost:8000/css/div-blue?delay=3000.css
```
