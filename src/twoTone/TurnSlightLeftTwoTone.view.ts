import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnSlightLeftTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-.53-.21-1.04-.59-1.41l-5-5h2.25z\"/>")
      .name("TurnSlightLeftTwoTone")
  }
}

export default TurnSlightLeftTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
