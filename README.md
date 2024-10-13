## Belajar Typescript Dasar

Instalasi 

```
npm init --y
```

Buka package.json, dan tambah type module


```
npm install--save-dev jest @type/jest    
```

```
npm install --save-dev babel-jest @babel/preset-env
```
```
npm install --save-dev typescript
```


```
npx tsc --init
```
Semua konfigurasi akan dibuat di file tsconfig.json
Ubah “module” dari “commonjs” menjadi “ES6”

### Buat file babel.config.json pada folder aplikasi
```
{
  "presets": ["@babel/preset-env"]
}

```