import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HandshakeRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63a3 3 0 0 1 0-4.24l4.24-4.24a3 3 0 0 1 4.24 0L16.48 9c.39.39.39 1.02 0 1.41zm.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62a.996.996 0 1 0 1.41 1.41l4.62-4.62.71.71-4.62 4.62a.996.996 0 1 0 1.41 1.41l8.32-8.34a3 3 0 0 0 0-4.24l-4.24-4.24a3.001 3.001 0 0 0-4.18-.06l4.47 4.47z\"/>")
      .name("HandshakeRound")
  }
}

export default HandshakeRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
