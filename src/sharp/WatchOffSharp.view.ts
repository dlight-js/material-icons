import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WatchOffSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 7c2.76 0 5 2.24 5 5 0 .64-.13 1.25-.35 1.82l1.5 1.5a6.963 6.963 0 0 0-1.79-8.79L15 2H9l-.96 3.21 2.14 2.14C10.75 7.13 11.36 7 12 7zM2.81 2.81 1.39 4.22l4.46 4.46a6.963 6.963 0 0 0 1.79 8.79L9 22h6l.96-3.21 3.82 3.82 1.41-1.41L2.81 2.81zM12 17c-2.76 0-5-2.24-5-5 0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z\"/>")
      .name("WatchOffSharp")
  }
}

export default WatchOffSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>