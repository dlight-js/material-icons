import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon6FtApartSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zM19 17v-2.01L5 15v2l-3-3 3-3v2.01L19 13v-2l3 3-3 3zm-9 2v-1H7v4h3v-2.5H8V19h2zm-1 1.5v.5H8v-.5h1zm8.5-1.5h-1v3h-1v-3h-1v-1h3v1zm-5 0v.5h1v1h-1V22h-1v-4H14v1h-1.5z\"/>")
      .name("Icon6FtApartSharp")
  }
}

export default Icon6FtApartSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>