import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class CropRotateTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11.95 24c.23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11zm.1-24c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 6h-6v2h6v6h2V8a2 2 0 0 0-2-2zm2 12h2v-2H8V4H6v2H4v2h2v8a2 2 0 0 0 2 2h8v2h2v-2z\"/>")
      .name("CropRotateTwoTone")
  }
}

export default CropRotateTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
