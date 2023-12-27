import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RepeatOneTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z\"/>")
      .name("RepeatOneTwoTone")
  }
}

export default RepeatOneTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
