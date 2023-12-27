import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RepeatTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 22v-3h12v-6h-2v4H7v-3l-4 4zM21 6l-4-4v3H5v6h2V7h10v3z\"/>")
      .name("RepeatTwoTone")
  }
}

export default RepeatTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
