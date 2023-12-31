import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WeekendSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z\"/>")
      .name("WeekendSharp")
  }
}

export default WeekendSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
