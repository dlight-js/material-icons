import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShowerRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"8\" cy=\"17\" r=\"1\"/><circle cx=\"12\" cy=\"17\" r=\"1\"/><circle cx=\"16\" cy=\"17\" r=\"1\"/><path d=\"M13 5.08V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08C7.61 5.57 5 8.47 5 12v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-3.53-2.61-6.43-6-6.92z\"/><circle cx=\"8\" cy=\"20\" r=\"1\"/><circle cx=\"12\" cy=\"20\" r=\"1\"/><circle cx=\"16\" cy=\"20\" r=\"1\"/>")
      .name("ShowerRound")
  }
}

export default ShowerRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
