# ViteJS TypeScript BoilerPlate

- Install Dependencies

```
cd <project-folder>
npm install
```

- Add Google ReCAPTCHA API site key v3

```
Approach 1:
cp .env.example .env.local
{Manualy put your key in .env.local or}

Approach 2:
sed '2s/$/<YOUR_KEY>/' .env.example > .env.local
```

- Run the Project

```
npm run dev
```

- Navigate to `http://localhost:3000`

## Folder Structure

```
├── src
│   ├── components (common components which can be shared and re-use in multiple place)
│   │   ├── **/*.less (Additional style in case tailwind can not support)
|   |   ├── hooks/use*.ts (Custom hook to handle logic for that component (may not can be reuse))
|   |   ├── index.tsx (Component only contain UI state)
│   ├── locales (i18n)
│   ├── layout
│   │   ├── components (common layout components which can be shared and re-use in multiple layout)
│   │   ├── LayoutName (folder: Define page container for specific page)
|   |   |   ├── components(components serves for specific Layout)
|   |   |   ├── hooks/use*.ts (Custom hook to handle logic for that Layout (may not can be reuse))
|   |   |   ├── index.tsx (Component only contain UI state)
│   ├── services (API calls)
│   │   ├── ServiceName (related to one model)
│   ├── hooks (custom hook handle common logic (not related to one component))
|   |   ├── use*.ts
│   ├── pages
|   |   |   ├── PageName (folder contain page source code)
|   |   |   |   ├── components (Container all components use in specific page)
|   |   |   |   |   ├── ComponentName
|   |   |   |   |   |   ├── hooks/useComponentName.ts (Custom hook to handle logic for component (may not can be reuse))
|   |   |   |   |   |   ├── ComponentName.tsx
|   |   |   |   |   |   ├── ComponentName.less
|   |   |   |   |   |   ├── index.ts
|   |   |   |   ├── hooks/*.ts (Define logics for specific page)
|   |   |   |   ├── index.tsx
|   |   |   |   ├── PageName.less (styles for page)
│   ├── styles
|   |   ├── globals.less (Declare global css here)
│   ├── utils (Define commonly used Logic here)
|   |   ├── *.ts
├── public (image, logo, fav.ico)
├── package.json
├── package-lock.json
├── postcss.config.ts
└── tsconfig.json (Config path, import and export for TypeScript)
```
