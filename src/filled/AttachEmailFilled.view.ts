import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AttachEmailFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3h4zm-10 1L3 6V4l8 5 8-5v2l-8 5z\"/><path d=\"M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z\"/>")
      .name("AttachEmailFilled")
  }
}

export default AttachEmailFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>