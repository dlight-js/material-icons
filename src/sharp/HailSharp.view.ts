import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HailSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-4h2c0 2.7-.93 4.41-2.3 5.5-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1c-.3.1-.5.2-.6.3-.53.41-1.4 1.03-1.4 3.6H5c0-2.06.35-3.78 2.11-5.29C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C15.96 5.55 17 4.76 17 2zM4 16h3v6H4v-6z\"/>")
      .name("HailSharp")
  }
}

export default HailSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>