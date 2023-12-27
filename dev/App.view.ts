import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, div } from "@dlightjs/types"
import { AbcFilled, AbcOutlined } from "../src"
interface AppProps {}

@View
class App implements AppProps {
  View() {
    AbcOutlined()
  }
}

export default App as Pretty as Typed<AppProps>
