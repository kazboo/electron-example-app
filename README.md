# electron-example-app

see https://ics.media/entry/7298/

## Usage

* Running
```
$ yarn start
or 
$ yarn electron ./src
```

* Packaging(Win)
```
$ yarn build-win
or
$ yarn electron-packager src electron-example-app --platform=win32 --arch=x64 --overwrite
```

* Packaging(Mac)
```
$ yarn build-macos
or
$ yarn electron-packager src electron-example-app --platform=darwin --arch=x64 --overwrite
```