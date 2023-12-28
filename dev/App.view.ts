import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, div } from "@dlightjs/types"
import { AbcFilled, AbcOutlined, CloseFilled } from "../src"
interface AppProps {}

@View
class App implements AppProps {
  View() {
    CloseFilled()
      .class("hhh")
      .onClick(() => {
        console.log("shit")
      })
  }
}

export default App as Pretty as Typed<AppProps>
