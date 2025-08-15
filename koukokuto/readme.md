# koukoku

koukokuを使うためのnpmパッケージ

現在、ReactとTailwind CSSが依存関係にあります

### 使い方

```
import { Koukoku } from 'koukoku'
import type { Nakami } from 'koukoku'

export default function App() {
  const nakami: Nakami = {
    id: 'ichiban'
  }
  return (
    <Koukoku nakami={nakami} />
  )
}
```

#### Nakami

`Nakami` は広告の中身を指定するための変数に使う型情報です

```
const nakami: Nakami = {
  id: 'ichiban'
}
```

#### Koukoku

`Koukoku` は広告を表示させるためのコンポーネントです


```
<Koukoku nakami={nakami} className="max-w-[100px]" />
```

`className` を使ってTailwind CSSでスタイルをカスタマイズできます

詳しい書き方についてはドキュメントをご覧ください
