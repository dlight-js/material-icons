import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WarehouseRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 19V8.35c0-.82-.5-1.55-1.26-1.86l-8-3.2c-.48-.19-1.01-.19-1.49 0l-8 3.2C2.5 6.8 2 7.54 2 8.35V19c0 1.1.9 2 2 2h3v-9h10v9h3c1.1 0 2-.9 2-2zm-11 0H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z\"/>")
      .name("WarehouseRound")
  }
}

export default WarehouseRound as Pretty as Typed<DLightIconType, HTMLSpanElement>