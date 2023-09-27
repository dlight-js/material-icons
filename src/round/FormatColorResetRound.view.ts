import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FormatColorResetRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 14c0-3.09-3.6-7.88-5.23-9.87a1 1 0 0 0-1.55 0c-.46.57-1.08 1.36-1.73 2.27l8.44 8.44c.04-.28.07-.56.07-.84zm1.29 5.01L6.12 5.84a.996.996 0 1 0-1.41 1.41l2.61 2.61C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.95-1.5l1.92 1.92c.39.39 1.02.39 1.41 0 .4-.38.4-1.02.01-1.41z\"/>")
      .name("FormatColorResetRound")
  }
}

export default FormatColorResetRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
